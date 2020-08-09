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

4) Another alternative to Radium is Styled-components. One reason why developers would love Styled-components is that you dont have to worry
   about the classNames. Styled components gives the unique classnames for your HTML and also you don't need to fear about your styled getting
   overridden by another style. Styled components takes care of this for us. But I usually prefer external CSS modules. Which keeps the code more cleaner in my opinion.

5) CSS modules is similar to Styled components where we can get unique classnames and that css will be applied only to that particular component.
   This is my personal fav approach since it seperates js and css into different files hence it makes it better structured and also we don't need to
   install additional library like Styled components or Radium.
