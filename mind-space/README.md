# ASSIGNMENT #3: [MIND SPACE (Web-Based Audio Experience)](https://hessaala.github.io/mind-space/)

![landing page](landing-page.png)

# Description
Mind Space is a site-specific auditory experince centered around writing a letter, created to raise awareness for mental health and individual mental health struggles. Divided into three parts, the website first indicates that it is an audio-based by prompting the user to use headphones, before playing the first sound file. Intended to present a calm and positive environment, the user is introduced to the creators of the site (Hessa and I), who are apparently located in a coffee shop. The song [Prelude in C Major](https://www.youtube.com/watch?v=ToWj_4xvVZA), composed by J.S. Bach, is used to set the ambience and tone of the experience. The creators casually talk about Mind Space, its purpose, and how the user can expect to interact with it. They then prompt the user to click on an arrow to the bottom left of the page which will take them to the letter-writing section.

The blank letter allows the user to fill up to 10 lines of text, in addition to their name. While typing, animated circles appear and fade around and behind the letter, while piano notes play on each key press. The user is welcome to write a letter addressed to everybody, someone in particular, or nobody. Brain dumps and rants are welcome; the purpose is to allow the user to acknowledge and address any difficult emotions or experiences, however they wish. The sounds and visualizations are intended to contribute to the feel of the space the user finds themself in, and represent their state of mind to a degree.

Finally, when the 'Send' button is clicked, the letter is folded and pushed into an envelope (an animation intended to convey a sense of closure), and the final sound file plays. The creators (again, Hessa and I) address the user, giving them to choice to write another letter or learn more about mental health through listed resources. 

# Process
[Link to repository with code.](https://github.com/hessaala/hessaala.github.io/tree/master/mind-space)

Tac

![keyboard_test](keyboard-test.png)



# Reflection/Evaluation
After


For implementation, we were striving for a basic visual design and focus more on the audio. Working on the wireframe, I had just put random lines across the page to represent the ‘minimal design’ we would actually use in the web page, but we turned out to like the idea of the lines actually representing thoughts in our minds. Thinking about it more, we designed the landing page to have the most complicated lines, then as the user experiences gets to the main page where the first audio is played, the lines become less complex as the calm background music intends to give a relaxing mood. We also wanted to give the user the chance to skip down to the letter by clicking on the arrows on the left anytime through the intro audio if they think they want to. When the user goes to the letter writing, the lines become the least complicated, since writing down thoughts and feelings makes you understand them and gain more control of your emotions. The piano notes are also part of the letter writing, spilling out complex thoughts process. Every letter and word written would let out a different emotion with the different piano notes released and the different colors of the circles. The circles intend to release the emotions of the user as they write, because we feel things always, even if our thoughts are not complex (which is signified through the little lines). The sounds of the piano notes would seem loud because it intends to display complex thoughts that turn into words when letter writing. The ending footer comes up when the user clicks on ‘send’, which have 2 options, writing a new letter and learning more about mental health through a link of resources. There are two intended contrasts worth mentioning: the contrast between the calm background and loud piano notes, and the contrast between the simple lines on the letter page and the colorful circles coming out when typing; both of those signify a calm mood while listening to the intro and outro audio, but also a state of acknowledging feelings and spilling them out during the letter writing experience.

The colors of the overall page (excluding the colored circles coming out when typing) are limited to shades of blue, yellow, and light purple, the universal colors meant to represent mental health awareness. Several issues came up while working on this project, including refreshing the letter for ‘write a new letter’, integrating the intro and outro sounds were a challenging aspect – but normal since it’s my first experience with sounds on the web. The visuals, design, layout, letter writing and animation, footer ending options, and recording intro and outro sounds were elements that I mainly worked on developing.

Overall, our expectations were almost fully met in this project, from the design to audio to the full experience. In addition to the elements of the webpage, we wanted to add an option for the user to share their letter by generating a link after the send button is pressed – but due to time constraints we mainly focused on developing the more important elements of the page. The final working version is almost exactly like our wireframe and what we had in mind initially, but with small changes in the page elements, design, and colors.

Keyboard Test

Testing out typing in the key of C Major

The github repo I'm using is a clone of [Patatap](https://patatap.com/), which is an animation and sound website.
Pressing any key from A to Z will produce notes. I'm trying to make every letter key produce a note crom the C Major arpeggio (C, E, G). JavaScript sound library in use: Howler.js
