import myimg from '../img/myimg.jpeg'
import css   from '../img/css.jpeg'
import hyundai from '../img/hyundai.jpeg'
import javascript from '../img/javascript.jpeg'
import naruNotes from '../img/naruNotes.png'



export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];


export const info = {
    firstName: "Narshinh",
    lastName: "Chaudhary",
    initials: "js ", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Front End Developer",
    selfPortrait: myimg, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the india'
        },
        
        {
            emoji: "📧",
            text: "narashinhchaudhary426@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'FacebookIcon',
            label: 'facebook'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        } ],
    bio: "Hello! I'm Narshinh. I'm a Front End Devloper. I studied Diploma in Front End, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3','jquery', 'sass','mui' ],
            exposedTo: ['tyscript']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        
        {
            title: "imageApp",
            live: "https://narashinhchaudhary.github.io/projects/java%20script/",
            source: "https://github.com/narashinhchaudhary/projects/tree/Master/java%20script",
            image: javascript
        },
        {
            title: "narunotes",
            live: "https://narunotes.netlify.app/",
            source: "",
            image: naruNotes
        },{
            title: "Invincible",
            live: "https://narashinhchaudhary.github.io/projects/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/narashinhchaudhary/projects", // this should be a link to the **repository** of the project, where the code is hosted.
            image: css
        },
        {
            title: "HyundaiApp",
            live: "https://narashinhchaudhary.github.io/projects/Hyundai/hyundai",
            source: "https://github.com/narashinhchaudhary/projects/tree/Master/Hyundai",
            image: hyundai
        },
        
    ]
}


{/*{info.socials.map((social, index) => (
                  <Socialicon key={index} link={social.link} icon={''}  label={social.label} />
               ))} */}