# Overview

Let's start with a brief overview of all the classes and the API exposed by `@japa/core`. Later, we will dig into specific classes and cover them in-depth.

The core of Japa does not make any high-level decisions like running tests or the naming conventions used by the test runner. You are free to design the high-level APIs yourself.

<div class="footnotes">
  <div>
      <h4>
        <a href="https://github.com/japa/core/blob/master/src/Test/index.ts">Test</a>
        <span class="font-mono">→</span>
      </h4>
      <p>
        <em> Test class is used to instantiate a test. Calling the <code>exec</code> method on this class executes the user-defined test function. </em>
      </p>
  </div>

  <div>
      <h4>
        <a href="https://github.com/japa/core/blob/master/src/Group/index.ts">Group</a>
        <span class="font-mono">→</span>
      </h4>
      <p>
        <em> Group class is used to instantiate a new group. You can add tests inside a group to bulk configure them. </em>
      </p>
  </div>

  <div>
      <h4>
        <a href="https://github.com/japa/core/blob/master/src/Suite/index.ts">Suite</a>
        <span class="font-mono">→</span>
      </h4>
      <p>
        <em>Suite class is used to instantiate a suite of tests. You can add tests and test groups inside a suite and run them together by calling the <code>suite.exec</code> method.</em>
      </p>
  </div>

  <div>
      <h4>
        <a href="https://github.com/japa/core/blob/master/src/Runner/index.ts">Runner</a>
        <span class="font-mono">→</span>
      </h4>
      <p>
        <em>Runner class is the topmost layer to run all suites of tests together. You will always be running tests using the Runner class.</em>
      </p>
  </div>

  <div>
      <h4>
        <a href="https://github.com/japa/core/blob/master/src/TestContext/index.ts">TestContext</a>
        <span class="font-mono">→</span>
      </h4>
      <p>
        <em>An instance of Test Context class is shared with all the tests. As the test runner creator, you can add custom properties to the Test context. Later, we will see how to add the <code>@japa/assert</code> and <code>@japa/expect</code> modules to Context.</em>
      </p>
  </div>

  <div>
      <h4>
        <a href="https://github.com/japa/core/blob/master/src/Refiner/index.ts">Refiner</a><span class="font-mono">→</span>
      </h4>
      <p>
        <em>Refiner class is used to cherry-pick and run specific tests. You can cherry-pick tests by their tags title or by calling the `pin` method on the test instance.</em>
      </p>
  </div>

  <div>
      <h4>
        <a href="https://github.com/japa/core/blob/master/src/Emitter/index.ts">Emitter</a><span class="font-mono">→</span>
      </h4>
      <p>
        <em>Emitter class is used to communicate with tests reporters. The test reporters can listen to specific events and display the progress of tests inside the terminal or write it to a file.</em>
      </p>
  </div>
</div>
