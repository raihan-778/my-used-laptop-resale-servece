import React from "react";

const Blog = () => {
  return (
    <div className="neutral rounded-xl mx-5 my-3 py-3">
      <h2 className="text-3xl  font-bold p-5  text-sky-500">
        Let's gathered some knowledge on React & JavaScript!
      </h2>

      <div className="rounded-xl mx-16 my-5">
        <div className="collapse  rounded-xl my-2 ">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-2xl font-semibold bg-primary text-peer-checked:bg-neutral peer-checked:text-secondary-content">
            What is a unit test in react?
          </div>
          <div className="collapse-content rounded-xl  text-left text-primary-content peer-checked:neutral peer-checked:text-secondary-content">
            <p>
              Unit Testing is a testing method that tests an individual unit of
              software in isolation. Unit testing for React Apps means testing
              an individual React Component. “Unit testing is a great
              discipline, which can lead to 40% – 80% reductions in bug density
              <br />
              Unit Testing is important for React Apps, as it helps in testing
              the individual functionality of React components. Moreover, any
              error in code can be identified at the beginning itself, saving
              time to rectify it at later stages. Some of the core benefits of
              Unit Testing are:
              <br />
              <strong>Process Becomes Agile:</strong> Agile Testing process is
              the main advantage of unit testing. When you add more features to
              the software, it might affect the older designs and you might need
              to make changes to the old design and code later. This can be
              expensive and require extra effort. But if you do unit testing,
              the whole process becomes much faster and easier.
              <br />
              <strong>Quality of code:</strong>
              Unit testing significantly improves the quality of the code. It
              helps developers to identify the smallest defects that can be
              present in the units before they go for the integration testing.
              <br />
              <strong> Facilitates change: </strong>
              Refactoring the code or updating the system library becomes much
              easier when you test each component of the app individually.
              <br />
              strong The debugging process is very simplified by doing unit
              testing. If a certain test fails, then only the latest changes
              that have been made to the code need to be debugged. Reduction in
              cost: When bugs are detected at an early stage, through unit
              testing, they can be fixed at almost no cost as compared to a
              later stage, let’s say during production, which can be really
              expensive.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-xl mx-16 my-5">
        <div className="collapse rounded-xl my-2 ">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-2xl font-semibold bg-primary text-peer-checked:bg-neutral peer-checked:text-secondary-content">
            How does the prototypical inheritance Work?
          </div>
          <div className="collapse-content rounded-xl text-left text-primary-content peer-checked:neutral peer-checked:text-secondary-content">
            <p>
              Every object with its methods and properties contains an internal
              and hidden property known as [[Prototype]]. The Prototypal
              Inheritance is a feature in javascript used to add methods and
              properties in objects. It is a method by which an object can
              inherit the properties and methods of another object.
              Traditionally, in order to get and set the [[Prototype]] of an
              object, we use Object.getPrototypeOf and Object.
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-xl mx-16 my-5">
        <div className="collapse rounded-xl my-2 ">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-2xl font-semibold bg-primary text-peer-checked:bg-neutral peer-checked:text-secondary-content">
            What are the different ways to manage a state in react application?
          </div>
          <div className="collapse-content rounded-xl text-left text-primary-content peer-checked:neutral peer-checked:text-secondary-content">
            <p>
              In modern React, we build our applications with functional
              components. Components are themselves JavaScript functions,
              independent and reusable bits of code. The purpose of building the
              application with components is to have a modular architecture,
              with a clear separation of concerns. This makes code easier to
              understand, easier to maintain, and easier to reuse when possible.
              <br />
              <br />
              The state is an object that holds information about a certain
              component. Plain JavaScript functions don't have the ability to
              store information. The code within them executes and "dissapears"
              once the execution is finished.
              <br />
              <strong>
                {" "}
                There are four main types of state you need to properly manage
                in your React apps:
              </strong>
              <ol>
                <li>1.Local state</li>
                <li>2.Global state</li>
                <li>3.Server state</li>
                <li>4.URL state</li>
              </ol>
              <strong>we can manage these state using</strong>
              <ul>
                <li>useState</li>
                <li>useEffect</li>
                <li>ReactQuery</li>
                <li>useContext</li>
                <li>useReducer</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-xl mx-16 my-5">
        <div className="collapse rounded-xl my-2 ">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-2xl font-semibold bg-primary text-peer-checked:bg-neutral peer-checked:text-secondary-content">
            Write something about React Vs Anguler Vs Vue.
          </div>
          <div className="collapse-content rounded-xl text-left text-primary-content peer-checked:neutral peer-checked:text-secondary-content">
            <p>
              <strong className="text-left">Angular vs React</strong>
              <br />
              If the choice you’re making is based on Angular vs React alone,
              then you’ll simply need to consider the pros and cons discussed
              for those libraries in this post. But overall, keep in mind that
              both libraries can be used for mobile and web apps, while Angular
              is generally better for more complex apps that are
              enterprise-ready.
              <br />
              React often requires extra modules and components, which keeps the
              core library small, but means there’s extra work involved when
              incorporating outside tools. Angular, on the other hand, is more
              of a full-fledged solution that doesn’t require extras like React
              often does, though it does have a steeper learning curve for its
              core compared to React.
              <br />
              React is more suitable for intermediate to advanced JavaScript
              developers who are familiar with concepts from ES6 and up, while
              Angular favors those same developers who are also familiar with
              TypeScript.
            </p>
            <p>
              <strong> React vs Vue</strong>
              <br />
              The choice between React vs Vue is often debated and it’s not an
              easy one. Vue has a vibrant and ever-growing community and has
              taken over popularity vs. React in many respects. React developers
              are still churning out lots of new components and extras, so
              there’s no sign that React is on the decline either.
              <br />
              Vue is generally more suited to smaller, less complex apps and is
              easier to learn from scratch compared to React. Vue can be easier
              to integrate into new or existing projects and many feel its use
              of HTML templates along with JSX is an advantage.
              <br />
              Overall, Vue might be the best choice if you’re a newer developer
              and not as familiar with advanced JavaScript concepts, while React
              is quite well suited for experienced programmers and developers
              who have worked with object-oriented JavaScript, functional
              JavaScript, and similar concepts.
            </p>

            <p>
              <strong>Angular vs Vue</strong>
              <br />
              In most cases, you probably wouldn’t be deciding between only
              Angular and Vue. They are vastly different libraries with very
              different feature sets and learning curves. Vue is the clear
              choice for less experienced developers, and Angular would be
              preferred for those working on larger apps.
              <br />
              A large library like Angular would require more diligence in
              keeping up with what’s new, while Vue would be less demanding in
              this regard and the fact that the two most recent major releases
              of Vue are in separate repositories helps.
              <br />
              It should also be noted that Vue was created by a developer who
              formerly worked on Angular for Google, so that’s another thing to
              keep in mind, though that wouldn’t have a huge impact on your
              decision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
