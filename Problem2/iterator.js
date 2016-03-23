var iterator = (function() {
    var index = 0
        data = // something
        length = data.length;
        
    return {
        next: function() {
            var element;
            
            // check to see if there is a next element
            if (!this.hasNext()) {
                return null
            }
            
            // get the next element
            element = data[index];
            index += 1
            return element
        },
        
        // check to see if there is another element
        hasNext: function() {
            return index < length;
        },
        
        // start at the beginning of the list
        restart: function() {
            index = 0
            return data[index]
        },
        
        // grab the current element
        current: function() {
            return data[index]
        }
    }
});