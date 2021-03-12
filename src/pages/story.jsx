import React, { useContext, useState } from "react";
import ReactTooltip from "react-tooltip";
import Gist from "react-gist";

import "./story.styles.scss";

// import context and theme
import ThemeContext from "../ThemeContext";
import AppTheme from "../Colors";

// get fontawesome imports
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Feedback from "../components/feedback/feedback";
import article from "../assets/images/article-preview.jpeg";
import Profile from "../components/profile/profile";
import CodeBlock from "../components/codeblock/codeblock";
import Footer from "../components/footer/footer";
import Related from "../components/related/related";
import Tags from "../components/tags/tags";
import CallToAction from "../components/callToAction/callToAction";

const Story = () => {
  const [feedback, setFeedback] = useState(4);
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  return (
    <main
      className="page-container"
      style={{
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
      }}
    >
      <div className="page-content">
        <h1>
          Step by Step Guide to Create 3 Different Types of Loading Screens in
          React
        </h1>
        <div className="story-info">
          <div>
            <a href="/" style={{ color: `${currentTheme.textColor}` }}>
              March 10th 2021
            </a>
            <span style={{ backgroundColor: `${currentTheme.tabletColor}` }}>
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: `${currentTheme.textColor}` }}
              />
              323 reads
            </span>
            <button data-tip="For more stories keep reading Hackereve.com">
              <FontAwesomeIcon
                icon={faBookmark}
                style={{ color: `${currentTheme.textColor}` }}
              />
            </button>
            <ReactTooltip
              className="tooltip"
              place="right"
              backgroundColor="#000"
            />
          </div>
          <Feedback feedback={feedback} setFeedback={setFeedback} />
        </div>
        <div className="image-container">
          <div className="full-width">
            <img src={article} alt="article feature" />
          </div>
        </div>
        <Profile />
        <div className="article-content">
          <p>Hey People,</p>
          <p>
            I was finding a good way to make Loading screen/animation for my
            small React application, and I found 3 different ways to make good
            loading screens,
          </p>
          <p>
            Type-1 : Using{" "}
            <a
              href="/"
              style={{ color: `${currentTheme.textColor}` }}
              className="highlight-links"
            >
              react-loading
            </a>{" "}
            library.
          </p>
          <p>
            Type-2 : Using{" "}
            <a
              href="/"
              style={{ color: `${currentTheme.textColor}` }}
              className="highlight-links"
            >
              react-lottie
            </a>{" "}
            library.
          </p>
          <p>
            Type-3 : Using simple <strong>CSS</strong>
          </p>
          <p>
            If you prefer to watch video tutorial then you can watch it here
            else just watch first 2 minutes to get an idea of what we're going
            to build here..and keep reading!😄
          </p>
          <div className="youtube-video">
            <iframe
              width="727"
              height="409"
              src="https://www.youtube.com/embed/Y7pL5wG5QOg"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <h2 className="small-headings">Let's Start Building...</h2>
          <p>Create your react app with,</p>
        </div>
        <CodeBlock>
          <code>npx create-react-app React-Loading-Screen</code>
        </CodeBlock>
        <div className="article-content">
          <p>Next, install two libraries that we're going to use.</p>
        </div>
        <CodeBlock>
          <code>npm install react-loading react-lottie</code>
        </CodeBlock>
        <div className="article-content">
          <p>
            <strong>NOTE:</strong> Here, I'm using{" "}
            <a
              href="/"
              className="highlight-links"
              style={{ color: `${currentTheme.textColor}` }}
            >
              jsonplaceholder API
            </a>{" "}
            to get data, to show how we can use pre-loader when using API.
          </p>
          <h2 className="type-headings">Type-1</h2>
          <p>Create separate file like PreLoader1.js.</p>
          <p>
            Create Functional Component and here, we're going to use two state,
          </p>
        </div>
        <CodeBlock>
          <code>
            <p>const [data, setData] = useState([]);</p>
            <p>const [done,setDone]=useState(undefined);</p>
          </code>
        </CodeBlock>
        <div className="article-content">
          <p>
            <strong>data state:</strong> To store data which comes from API
            call.
          </p>
          <p>
            <strong>done state:</strong> It is boolean to decide weather to show
            pre-loader or not.
          </p>
          <p>Now in the useEffect,</p>
        </div>
        <CodeBlock>
          <code>
            <p>
              useEffect(<span>() => &#123;</span>
            </p>
            <p> setTimeout(() => &#123;</p>
            <p>
              {" "}
              <span> </span>fetch("https://jsonplaceholder.typicode.com/posts")
            </p>
            <p>
              {" "}
              <span> </span>
              <span> </span>.then((response) => response.json())
            </p>
            <p>
              {" "}
              <span> </span>
              <span> </span>.then((json) => &#123;
            </p>
            <p>
              {" "}
              <span> </span>
              <span> </span>
              <span> </span>console.log(json);
            </p>
            <p>
              {" "}
              <span> </span>
              <span> </span>
              <span> </span>setData(json);
            </p>
            <p>
              {" "}
              <span> </span>
              <span> </span>
              <span> </span>setDone(true);
            </p>
            <p>
              {" "}
              <span> </span>
              <span> </span>
              &#125;);
            </p>
            <p>
              {" "}
              <span> </span>&#125;, 2000);
            </p>
            <p>&#125;, []);</p>
          </code>
        </CodeBlock>
        <div className="article-content">
          <blockquote className="type-headings">
            <em>You can put your own logic in useEffect!</em>
          </blockquote>
          <p>Now in the above useEffect method,</p>
          <p>
            First we use fetch method to get data from api then we convert that
            data into json, then we will set data state with json data, and
            after that set done state to true.
          </p>
        </div>
        <div className="article-content">
          <blockquote className="type-headings">
            <em>
              NOTE: Here I have used time out function for 2 seconds so that we
              can see loading screen for more time.
            </em>
          </blockquote>
          <p>Now let's render our component.</p>
          <Gist id="b8f590619033994c4e7f08e24088ee82" file="preloader.js" />
          <p>
            <strong>Line 22:</strong> we will check if done state is false then
            we will render pre-loading component else we will render data we
            want to show.
          </p>
          <p>
            <strong>Line 23:</strong> Here I have used react-loading library,
            where we only have to set type, color, height and width. you can
            find more functionalities on{" "}
            <a
              href="/"
              className="highlight-links"
              style={{ color: `${currentTheme.textColor}` }}
            >
              here
            </a>
            .
          </p>
          <p>
            <strong>Line 30:</strong> From here I have mapped data state inside
            the ul tag which returns title of each post in li tag. (use
            console.log() inside useEffect to see what kind of data we are
            getting)
          </p>
          <p>That's the end of Part-1 here.</p>
          <h2 className="type-headings">Type-2</h2>
          <p>Create new file and name it as PreLoader2.js</p>
          <p>Create functional component, and import react-Lottie library.</p>
        </div>
        <CodeBlock>
          <code>import Lottie from "react-lottie"</code>
        </CodeBlock>
        <div className="article-content">
          <p>
            In this type of loading screen we have to download animation files
            from{" "}
            <a
              href="/"
              className="highlight-links"
              style={{ color: `${currentTheme.textColor}` }}
            >
              https://lottiefiles.com/
            </a>
          </p>
          <p>For this tutorial i'm using below two files,</p>
          <p>
            Earth animation :{" "}
            <a
              href="https://lottiefiles.com/1055-world-locations"
              className="highlight-links"
              style={{ color: `${currentTheme.textColor}` }}
            >
              link
            </a>
          </p>
          <p>
            Success animation:
            <a
              href="https://lottiefiles.com/1127-success"
              className="highlight-links"
              style={{ color: `${currentTheme.textColor}` }}
            >
              link
            </a>
          </p>
          <p>
            Download this file (Lottie JSON) and keep them in your project
            directory.
          </p>
          <p>Let's import this json files like below,</p>
        </div>
        <CodeBlock>
          <code>
            <p>import * as location from "../1055-world-locations.json";</p>
            <p>import * as success from "../1127-success.json";</p>
          </code>
        </CodeBlock>
        <div className="article-content">
          As mentioned{" "}
          <a
            href="/"
            className="highlight-links"
            style={{ color: `${currentTheme.textColor}` }}
          >
            here
          </a>{" "}
          in the react-Lottie library documentation, we need to set default
          options to use this animation files in our project so first declare
          this options as,
        </div>
        <CodeBlock>
          <code>
            <p>const defaultOptions1 = &#123;</p>
            <p> loop: true,</p>
            <p> autoplay: true,</p>
            <p> animationData: location.default,</p>
            <p> rendererSettings: &#123;</p>
            <p>
              {" "}
              <span> </span> preserveAspectRatio: "xMidYMid slice",
            </p>
            <p> &#125;,</p>
            <p>&#125;</p>

            <p>const defaultOptions2 = &#123;</p>
            <p> loop: true,</p>
            <p> autoplay: true,</p>
            <p> animationData: success.default,</p>
            <p>
              {" "}
              <span> </span> preserveAspectRatio: "xMidYMid slice",
            </p>
            <p> &#125;,</p>
            <p>&#125;</p>
          </code>
        </CodeBlock>
        <div className="article-content">
          <p>
            defaultOptions1 for first file while defaultOptions2 for second
            file.
          </p>
          <p>In this tutorial we're going to use 3 state:</p>
        </div>
        <CodeBlock>
          <code>
            <p>const [data, setData] = useState([]);</p>
            <p>const [loading, setloading] = useState(undefined);</p>
            <p>const [completed, setcompleted] = useState(undefined);</p>
          </code>
        </CodeBlock>
        <div className="article-content">
          <p>
            <strong>data state:</strong> To store data which comes from API
            call.
          </p>
          <p>
            <strong>loading state:</strong> Boolean state for first animation
            file.
          </p>
          <p>
            <strong>completed state:</strong> Boolean state for second animation
            file when API call is completed.
          </p>
        </div>
        <CodeBlock>
          <code>
            <p>useEffect(() => &#123;</p>
            <p> setTimeout(() => &#123;</p>
            <p>
              {" "}
              <span> </span>fetch("https://jsonplaceholder.typicode.com/posts")
            </p>
            <p>
              {" "}
              <span> </span>
              <span> </span>.then((response) => response.json())
            </p>
            <p>
              {" "}
              <span> </span>
              <span> </span>.then((json) => &#123;
            </p>
            <p>
              {" "}
              <span> </span>
              <span> </span>
              <span> </span>console.log(json);
            </p>
            <p>
              {" "}
              <span> </span>
              <span> </span>
              <span> </span>setData(json);
            </p>
            <p>
              {" "}
              <span> </span>
              <span> </span>
              <span> </span>setloading(true);
            </p>
            <p>
              {" "}
              <span> </span>
              <span> </span>
              <span> </span>setTimeout(() => &#123;
            </p>
            <p>
              {" "}
              <span> </span>
              <span> </span>
              <span> </span>
              <span> </span>setcompleted(true);
            </p>
            <p>
              {" "}
              <span> </span>
              <span> </span>
              <span> </span>&#125;, 1000);
            </p>
            <p>
              {" "}
              <span> </span>
              <span> </span>&#125;);
            </p>
            <p>
              {" "}
              <span> </span>&#125;, 2000);
            </p>
            <p> &#125;, []);</p>
          </code>
        </CodeBlock>
        <div className="article-content">
          <blockquote className="type-headings">
            <em>You can put your own logic in useEffect!</em>
          </blockquote>
          <p>
            UseEffect method is almost same as in part-1, only difference is
            that instead of done state we have to set completed and loading
            state to true, Also, I have used one more timeout function for 1 sec
            to see the 2nd animation.
          </p>
        </div>
        <CodeBlock>
          <code>
            <p>const defaultOptions1 = &#123;</p>
            <p> loop: true,</p>
            <p> autoplay: true,</p>
            <p> animationData: location.default,</p>
            <p> rendererSettings: &#123;</p>
            <p>
              {" "}
              <span> </span> preserveAspectRatio: "xMidYMid slice",
            </p>
            <p> &#125;,</p>
            <p>&#125;</p>

            <p>const defaultOptions2 = &#123;</p>
            <p> loop: true,</p>
            <p> autoplay: true,</p>
            <p> animationData: success.default,</p>
            <p>
              {" "}
              <span> </span> preserveAspectRatio: "xMidYMid slice",
            </p>
            <p> &#125;,</p>
            <p>&#125;</p>
          </code>
        </CodeBlock>
        <div className="article-content">
          <p>As shown in the above code,</p>
          <p>
            in the return, if completed state is false then we will render
            loading screen else we will render our data.
          </p>
          <p>
            In the animation part we will do one more conditional rendering,
          </p>
          <p>
            when loading state is false then we will render the earth animation
            else we will render the success animation.
          </p>
          <p>
            Dont't forget to set{" "}
            <span style={{ backgroundColor: `${currentTheme.tabletColor}` }}>
              options=&#123;defaultOptions1&#125;
            </span>{" "}
            for file 1 and{" "}
            <span style={{ backgroundColor: `${currentTheme.tabletColor}` }}>
              options=&#123;defaultOptions2&#125;
            </span>{" "}
            for file 2.
          </p>
          <p>Full code:</p>
          <Gist id="3431ccff9422173b5d811685493bd174" file="preloader2.js" />
          <p>
            Now as per the Creative Commons License of{" "}
            <a
              href="https://lottiefiles.com/page/license"
              className="highlight-links"
              style={{ color: `${currentTheme.textColor}` }}
            >
              lottiefiles.com
            </a>{" "}
            The creator(s) must be attributed in your application.
          </p>
          <p>You can attribute creator as shown in line no 60 to 71.</p>
          <p>That's the end of Part-2.</p>
          <h2 className="type-headings">Type-3</h2>
          <p>
            In this type we are not going to use any library instead we are only
            using simple css styling.
          </p>
          <p>
            Now the logic of displaying pre-loader is same as in the part-2 so
            here I'm not going to show you the whole process.
          </p>
          <p>Create new file PreLoader3.js</p>
          <p>
            Copy the whole code from PreLoader2.js file and remove all code
            related with react-Lottie library and keep everything as it is.
          </p>
          <p>only change return statement as shown below,</p>
        </div>
        <CodeBlock>
          <code>
            <p>const defaultOptions1 = &#123;</p>
            <p> loop: true,</p>
            <p> autoplay: true,</p>
            <p> animationData: location.default,</p>
            <p> rendererSettings: &#123;</p>
            <p>
              {" "}
              <span> </span> preserveAspectRatio: "xMidYMid slice",
            </p>
            <p> &#125;,</p>
            <p>&#125;</p>

            <p>const defaultOptions2 = &#123;</p>
            <p> loop: true,</p>
            <p> autoplay: true,</p>
            <p> animationData: success.default,</p>
            <p>
              {" "}
              <span> </span> preserveAspectRatio: "xMidYMid slice",
            </p>
            <p> &#125;,</p>
            <p>&#125;</p>
          </code>
        </CodeBlock>
        <div className="article-content">
          <p>In the above code,</p>
          <p>
            div with the class spinner contains Loading text and spinner. while
            div with the className completed contains success symbol.(✓).
          </p>
          <p>Now let's do some css styling.</p>
          <p>
            create separate file preloader3.css for styling and import it in the
            preloader3.js file.
          </p>
          <Gist id="13d59bca94157f5fa4ddc9b7a8491bc8" file="preloader3.css" />
          <p>Now,</p>
          <p>
            <strong>.spinner</strong> class is simply box for spinner.
          </p>
          <p>
            <strong>.spinner span</strong> contains styling and animation for
            loading text.
          </p>
          <p>
            <strong>.half-spinner</strong> contains styling for spinner.
          </p>
          <p>
            now to cut this whole spinner as in line no 20 you just have to set
            border top to transparent.
          </p>
          <p>
            <strong>.completed</strong> contains styling and animation for
            success(✓) symbol.
          </p>
          <p>This is the End of type 3.</p>
          <p>
            You can find Full-Code repository from{" "}
            <a
              href="/"
              className="highlight-links"
              style={{ color: `${currentTheme.textColor}` }}
            >
              here.
            </a>
          </p>
          <p>
            <strong>Thanks for reading and supporting.😄</strong>
          </p>
          <p>Feel free to visit my youtube channel:</p>
          <p>
            <a
              href="/"
              className="highlight-links"
              style={{ color: `${currentTheme.textColor}` }}
            >
              CodeBucks
            </a>
          </p>
          <p>
            <em>
              Previously published{" "}
              <a
                href="/"
                className="highlight-links"
                style={{ color: `${currentTheme.textColor}` }}
              >
                here.
              </a>
            </em>
          </p>
          <div style={{ marginTop: "20px" }}>
            <Feedback feedback={feedback} setFeedback={setFeedback} />
          </div>
        </div>
        <Footer />
        <Related />
        <Tags />
        <CallToAction />
      </div>
    </main>
  );
};

export default Story;
