This is not a project. This is just for me to practice React concepts.

//Notes

1) Never mutate the original state. It works but, it is a bad way of doing it. 
   So, alternatively what we can do is that we can just create a new object and assign our state into this new object
   This is commonly done using a spread operator.
   There are other ways too like using Object.assign().

2) If you want to delete, edit or add a list. Always do it using a unique key to each list. 
   We can do it without using any unique key as well but it's not recommended.
   Note: For this you assign an unique id to the key of the component. 
         Then you can pass this key to any function/method.

3) If you want to use psuedo selectors or media queries for inline elements. Then you need to install Radium. But here
   you cannot use media queries, keyframes etc directly under the StyleRoot.( We wrap entire return code with StyleRoot). 
   So we need to put that media query, keyframes etc code in another component seperately. Check the following link for details
   Link: https://stackoverflow.com/questions/41446835/radium-error-please-wrap-your-application-in-the-styleroot-component/45203324#45203324
