# Youtube Clone

- Developed the youtube clone including multiple features 
    - Header 
    - Sidebar 
    - SearchBar 
        - use search API
        - Optimization
            - used debouncing effect to reduce the API calls 
            - cached the search results in the redux store so as not to make API calls for repeated searchQuery
            - will try to implement LRU cache ie storing only the [50] results storing the most recently used data while removing the least recently used data if the object key's size>50
    - Watch Page
    - Nested Comments
    - Live Chat 


Cache:
time complexity to search in an array = O(n) 
time complexity to search in object = O(1)

Note: 
- Why we dont use index as unique keys while applying map function in jsx because if we use index as keys then if the order of elements ie indexing of elements in the list changes we will not be able to populate or memoize the items properly. 
- The keys should be unique and stable.
- Unstable keys leads to errors and warnings
- And for optimization purpose so that in case if 1 object is added in the list, we do not need to populate the whole list again and again we can use memo which will memoize the object and will populate that object whose props get's changed.

