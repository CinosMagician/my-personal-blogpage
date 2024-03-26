document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('blogForm');

    form.addEventListener('submit', function(event) {
        // Prevent form submission
        event.preventDefault();
        
        // Collect data from form fields
        const username = document.getElementById('username').value;
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        // Checks to see if any fields are left blank and throws an alert if any aren't.
        if (!username || !title || !content) {
            alert('Please fill in all fields.');
            return;
        }

        // Create blog post object
        const blogPost = {
            username: username,
            title: title,
            content: content
        };

        // Retrieve existing blog posts array from local storage or creates new array
        let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

        // Adds the new blog post to the array
        blogPosts.push(blogPost);

        // Saves the updated blog posts array back to local storage
        localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

        // redirects the page to blog.html
        window.location.href = 'blog.html';
    });
});