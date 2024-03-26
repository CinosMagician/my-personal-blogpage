function displayBlogPosts() {
    // this retreives the blogposts array or creates a blank array if no data to prevent error
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    // runs through each post in the array and makes them into a post onto the page with the info we gathered
    blogPosts.forEach(post => {
        // First makes a div to store the data
        const postDiv = document.createElement('div');
        // adds the class to the div for styling
        postDiv.classList.add('blogPost');
        // reads the elements of the object and adds the text to them. repeat for all
        const titleHeading = document.createElement('h2');
        titleHeading.textContent = post.title;

        const contentParagraph = document.createElement('p');
        contentParagraph.textContent = post.content;

        const usernameHeading = document.createElement('h5');
        usernameHeading.textContent = `Posted by: ${post.username}`;
        // appends the children elements to the div
        postDiv.appendChild(titleHeading);
            
        postDiv.appendChild(contentParagraph);

        postDiv.appendChild(usernameHeading);
        // Then appends the div to the post area, displaying it on our page.
        blogPostArea.appendChild(postDiv);
    });
}
// Runs the function when the page is loaded to display all posts saved from storage.
 displayBlogPosts();