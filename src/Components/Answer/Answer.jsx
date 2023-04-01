import React from "react";

const Answer = () => {
  return (
    <div className="bg-green-100 p-10 rounded">
      <h1 className="my-10 text-center text-5xl font-bolder underline">
        Answer of the question
      </h1>
      <ul>
        <li className="font-bold text-2xl">1: Props vs state?</li>
        <li>
          Ans:
          <ul>
            <li>
              props: props are immutabale. <br />
              if you have data and want to share anther component needs you
              should passed through by props.
            </li>
            <li>
              state: state useally used to stored data of current page <br />
              state are top leval component. state are mutable.
            </li>
          </ul>
        </li>
        <li className="font-bold text-2xl">2:How does useState work?</li>
        <li>
          Ans:
          <ul>
            <li>
              {" "}
              useState have 2 values <br />
              useState work like hook and it can be used to keep track different
              data like strings number etc. <br />
              changable state and a function which is that help to change the
              value of this.state.
            </li>
          </ul>
        </li>
        <li className="font-bold text-2xl">
          3: Purpose of useEffect other then fetching data?
        </li>
        <li>
          Ans:
          <ul>
            <li>
              fetching data by useEffect online to display in website we need to
              used hook to get data so what will happen is your component
              rendering will be stuck when the thread of execution reaches this
              point until you get the data from outside of the world. <br />
              It will have accessibility to those data that are required to use
              in side effects.
              <br />
              It can also update the data later, based on the dependencies and
              changes. <br />
              we can move those side effects to the useEffect hook so that our
              components can load/render. After completing the rendering
              process, React Engine will fire the useEffect hook to run the side
              effects code and update the component data.
            </li>
          </ul>
        </li>
        <li className="font-bold text-2xl">4: How does react work?</li>
        <li>
          Ans: <br />
          React is a JavaScript library (not a framework) that creates user
          interfaces (UIs) in a predictable and efficient way using declarative
          code. You can use it to help build single page applications and mobile
          apps, or to build complex apps if you utilise it with other libraries.
        </li>
      </ul>
    </div>
  );
};

export default Answer;
