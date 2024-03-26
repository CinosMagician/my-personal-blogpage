document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('blogForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Collect data from form fields
        const username = document.getElementById('username').value;
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        // Create blog post object
        const blogPost = {
            username: username,
            title: title,
            content: content
        };

        // Retrieve existing blog posts array from local storage or create new array
        let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

        // Add new blog post to the array
        blogPosts.push(blogPost);

        // Save updated blog posts array back to local storage
        localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

        // Redirect to blog.html
        console.log(`Move to page`)
        window.location.href = 'blog.html';
    });
});