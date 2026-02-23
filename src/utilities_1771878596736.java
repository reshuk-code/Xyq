/**
 * UnionFind (Disjoint Set Union) Data Structure
 * 
 * A utility data structure that efficiently handles:
 * - Union: Merge two sets
 * - Find: Determine which set an element belongs to
 * 
 * Time Complexity: Nearly O(1) with path compression and union by rank
 */
public class UnionFind {
    
    // Parent array - stores the parent of each element
    private int[] parent;
    
    // Rank array - stores the approximate height of each tree
    private int[] rank;
    
    // Number of connected components
    private int components;
    
    /**
     * Initialize UnionFind with n elements (0 to n-1)
     * Each element is initially its own set
     * 
     * @param n Number of elements
     */
    public UnionFind(int n) {
        parent = new int[n];
        rank = new int[n];
        components = n;
        
        // Initialize each element as its own parent (own set)
        for (int i = 0; i < n; i++) {
            parent[i] = i;
            rank[i] = 0;
        }
    }
    
    /**
     * Find the root (representative) of the set containing element x
     * Uses path compression optimization - flattens the tree structure
     * 
     * @param x Element to search for
     * @return Root of the set containing x
     */
    public int find(int x) {
        // Path compression: make every element point directly to root
        if (parent[x] != x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }
    
    /**
     * Union two sets by merging them into one
     * Uses union by rank optimization - attaches smaller tree under larger tree
     * 
     * @param x Element from first set
     * @param y Element from second set
     * @return true if sets were different and merged, false if already in same set
     */
    public boolean union(int x, int y) {
        int rootX = find(x);
        int rootY = find(y);
        
        // Already in same set
        if (rootX == rootY) {
            return false;
        }
        
        // Union by rank: attach smaller rank tree under larger rank tree
        if (rank[rootX] < rank[rootY]) {
            parent[rootX] = rootY;
        } else if (rank[rootX] > rank[rootY]) {
            parent[rootY] = rootX;
        } else {
            // Equal rank: attach one to other and increase rank
            parent[rootY] = rootX;
            rank[rootX]++;
        }
        
        // Decrease component count as sets merged
        components--;
        return true;
    }
    
    /**
     * Check if two elements are in the same set
     * 
     * @param x First element
     * @param y Second element
     * @return true if in same set, false otherwise
     */
    public boolean connected(int x, int y) {
        return find(x) == find(y);
    }
    
    /**
     * Get the number of connected components
     * 
     * @return Number of disconn