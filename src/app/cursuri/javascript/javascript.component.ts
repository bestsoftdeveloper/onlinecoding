import { Component, OnInit } from '@angular/core';
import { HttpWrapperService } from '../../services/http/httpService'

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'],
})
  export class JavascriptComponent implements OnInit {

  private text: string;
  private  httpService: HttpWrapperService;
  public codeResult : any;
  public apps: any;
  public variabile: any;
  public statements:any;
  public jsobj:any;
  public dataTypes: any;
  private timers : any;

  constructor(httpService: HttpWrapperService)
  {
    this.httpService = httpService;
    this.text = 'console.log("start");';

    this.apps = {
      title: "Helpful Applications",
      code:"dd",
      el: [
        {

          title: "Helpful Applications",
          desc: "Below is the list of usefully applications which may be used for a faster development \n",
          code: "function add(a,b){return a+b;}console.log('a');",
          el:[{
            title: "Total Commander",
            desc: "Total Commander (formerly Windows Commander) is an Orthodox File Manager for Windows.  \n"
          },
            {
              title: "Developer tools or Firebug (used by Firefox)",
              desc: "The Chrome Developer Tools (DevTools for short), are a set of web authoring and debugging tools built into Google Chrome.  \n",
              ex: {
                files: ["dev_tools.png"]
              },
            },
            {
              title: "Paint.net",
              desc: "Paint.NET is image and photo editing software for PCs that run Windows.  \n",
            },
            {
              title: "Snipping Tools",
              desc: "Software used to capture the screen, create gif files or video recordings. Search for 'snip' on windows or  https://snipping-tool-plus-plus.en.softonic.com/download  \n",
            },
            {
              title:"KeyPass",
              desc: "Password manager applicaton; https://keepass.info/"
            },
            {
              title:"Task Management",
              desc:"Please create a new account on trello.com; We can use this site for task management  "
            },
            {
              title: "postman",
              desc:"Tool used to simulate http requests to a server; advanced rest client may be another alternative to postman. "
            },
            {
              title: "Visual Studio Code",
              desc:"Tool used write javascript code ",
              descHtml:"Other usefull tools are: sublime text, webstorm; Here is a list of IDE tools: <a href='https://www.codementor.io/mattgoldspink/best-text-editor-atom-sublime-vim-visual-studio-code-du10872i7' target='_blank'>Tools</a> "
            },
            {
              title: "Slack",
              desc:"Tool used for a better communication between team members ",
              descHtml:" "
            },
            {
              title: "Team Viewer",
              desc:"Tool used for screen sharing ",
              descHtml:" "
            },
            {
              title: "Source Management",
              desc:"Process used to store the development sources, see other people work. ",
              el:[
                {
                  title:"git",
                  desc:"Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency",
                  descHtml:"https://git-scm.com/"
                },
                {
                  title: "Source tree",
                  desc:"A Git GUI that offers a visual representation of your repositories",
                  descHtml:"https://www.sourcetreeapp.com/ <br/> <a href='Git_Fflow.html' target='_blank'>Diagrama flow source tree</a>"
                }]
            }]
        }


      ]
    };

    this.variabile = {
      title: "Variabiles",
      el: [{
        title: "Javascript",
        desc: "JavaScript, often abbreviated as JS, is a high-level, dynamic",
        descHtml: "JavaScript, often abbreviated as JS, is a high-level, dynamic, weakly typed, prototype-based, multi-paradigm, and interpreted programming language.<br/><b>Developer</b>: Netscape Communications Corporation, Mozilla Foundation, Ecma International Stable release: ECMAScript 2017 / June 2017; 5 months ago. <br/><b> First appeared:</b> December 4, 1995; 21 years ago <br/>  ",
        fname: "jsdesc.html",
        code:"",
      },
        {
          title: "Variables",
          desc: "JavaScript variables are containers for storing data values.  \n",
          el: [{
            title: "Variables",
            desc: "var x = 5; var nume = \"george\";",
            descHtml: "var y= 1; <br/> Restrictii la denumire <br/> <ul> " +
            " <li>Names can contain letters, digits, underscores, and dollar signs.</li>" +
            "<li>Names must begin with a letter</li>" +
            "<li>Names can also begin with $ and _ (but we will not use it in this tutorial)</li>" +
            "<li>Names are case sensitive (y and Y are different variables)</li>" +
            "<li>Reserved words (like JavaScript keywords) cannot be used as names</li>" +
            "</ul> ",
            // ex: {
            //     files: ["block_scoped_variables6.png", "block_scoped_variables5.png"]
            // },
            test: {
              desc: " ",
              col: 5
            },
            todo: ["Explain the meaning of variable intialization?", "What's the value of a uninitialized variable ?", 'How the information can be presented into the console?', "Define a numeric variable", "Define a string variable"],
            cols: 1
          },
            {
              title: "Operators",
              descHtml: "What's the purpose of javascript operators?",
              el: [{
                title: "Numeric operators",
                descHtml: "",
                ex: {
                  files: ["operatori_aritmetici.png"]
                },
                test: {
                  desc: " ",
                  col: 5
                },
                todo: ["Can we make a quick exercise for every operator?"],
                cols: 2
              },
                {
                  title: "Assignement operators",
                  descHtml: "",
                  ex: {
                    files: ["operatori_assign.png"]
                  },
                  test: {
                    desc: "Use 2 numeric variables and assign the value from the first variable to the seccond one? ",
                    col: 5
                  },
                  todo: [],
                  cols: 2,
                  info: {
                    example: "After the first session , here we are! <b> Conclusions:</b> <br/> <ul>" +
                    "<li>Create a new html file</li>" +
                    "<li>Add the script tag into it</li>" +
                    "<li>create a new variable and play with the operators</li>" +
                    "<li>What's the difference between a numeric and a string variable</li>" +
                    "<li>What's the debugger role into the javascript instructions?</li>" +
                    "<li>Use the developer console tool in order to inspect the variables</li>" +
                    "</ul>"
                  }
                },
                {
                  title: "Comparation operators",
                  descHtml: "variablename = (condition) ? value1:value2",
                  ex: {
                    files: ["operator_compare.png"]
                  },
                  test: {
                    desc: " ",
                    col: 5
                  },
                  todo: ["Add the values of 2 variables and store the value into another one.", "Check the equality of 2 variables; number and string", "How many options there are for paramater transmision?", "Compare an undefined variable with another defined variable", 'What\'s the diference between == and === ', "Use ternary operator ", "When the ternary operator can be used?", "What's the alternative to this operator ? (not yet presented)"],
                  cols: 2
                },
                {
                  title: "Boolean algebra",
                  descHtml: "",
                  ex: {
                    files: ["operator_boolean.png"]
                  },
                  test: {
                    desc: " ",
                    col: 5
                  },
                  todo: ["Where these operators can be used? "],
                  cols: 2

                },
                {
                  title: "Logical operators",
                  descHtml: "",
                  ex: {
                    files: ["operator_logic.png"]
                  },
                  test: {
                    desc: " ",
                    col: 5
                  },
                  todo: ["We have 2 numeric variables; Check if both of the variables has values smaller than 5 ", "How the compiler is executing these instructions?", "What's the execution priority between && and ||? ", "Use ternary operator", "How we can switch a variable value from true --> false?", "How we can change the variable value from 1 to 0?"],
                  cols: 2

                }, {
                  title: "The typeof Operator",
                  descHtml: "",
                  ex: {
                    files: ["operator_type.png"]
                  },
                  test: {
                    desc: " ",
                    col: 5
                  },
                  todo: [],
                  cols: 1
                }, {
                  title: "Bitwise Operators",
                  descHtml: "",
                  ex: {
                    files: ["operator_bitwise.png"]
                  },
                  test: {
                    desc: " ",
                    col: 5
                  },
                  todo: ["Show the value of a number by using base 2", "Store the selected week days into a number "],
                  cols: 2
                }
              ]

            }
          ]
        },

      ]
    };

    this.statements = {
      title: "Statements",
      desc: "Represent the instructions used for data manipulation.  \n",
      //descHtml: "<i style='color:red'>Label:</i> <input name='test'>",
      el: [{
        title: 'List of instructions',
        desc: "",
        el: [{
          "title": "break",
          "descHtml": "Exits a switch or a loop",
          "ex": {
            "files": [],
            "code": []
          },
          "todo": [],
          "cols": 2,
          "info": { "syntax": "\n break;\n break labelname;", "parameters": "", "example": "\n<h3>Example</h3>\n<p>In this example we use a for loop together with the break statement.</p>\n <p>Loop through a block of code, but exit the loop when the variable i is equal \nto \"3\":</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\"><span style=\"color:red\">\n</span> <span style='color:mediumblue'>var</span> text = <span style=\"color:brown\">\"\"</span><br><span style=\"color:mediumblue\">var</span> i;<br><span style=\"color:mediumblue\">for</span> (i = <span style=\"color:red\">0</span>; i &lt; <span style=\"color:red\">5</span>; i++) {<br>&nbsp;&nbsp;&nbsp; <span style=\"color:mediumblue\">if</span> (i === <span style=\"color:red\">3</span>) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style=\"color:mediumblue\">break</span>;<br>&nbsp;&nbsp;&nbsp; }<br>&nbsp;&nbsp;&nbsp; text += <span style=\"color:brown\">\"The number is \"</span> + i + <span style=\"color:brown\">\"&lt;br&gt;\"</span>;<br>}<span style=\"color:red\">\n</span> </span></div>\n<p>The result of <em>text</em> will be:</p>\n<div class=\"w3-code notranslate\">\n The number is 0<br>The number is 1<br>The number is 2</div>\n\n" },
          code:""
        }, {
          "title": "continue",
          "descHtml": "Breaks one iteration (in the loop) if a specified condition occurs, and \ncontinues with the next iteration in the loop",
          "ex": {
            "files": [],
            "code": []
          },
          "todo": [],
          "cols": 2,
          "info": { "syntax": "\n continue;\n continue labelname;", "parameters": "", "example": "\n<h3>Example</h3>\n<p>In this example we use a for loop together with the continue statement.</p>\n <p>Loop through a block of code, but skip the value of \"3\":</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\"><span style=\"color:red\">\n</span> <span style=\"color:mediumblue\">var</span> text = <span style=\"color:brown\">\"\"</span><br><span style=\"color:mediumblue\">var</span> i;<br><span style=\"color:mediumblue\">for</span> (i = <span style=\"color:red\">0</span>; i &lt; <span style=\"color:red\">5</span>; i++) {<br>&nbsp;&nbsp;&nbsp; <span style=\"color:mediumblue\">if</span> (i === <span style=\"color:red\">3</span>) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style=\"color:mediumblue\">continue</span>;<br>&nbsp;&nbsp;&nbsp; }<br>&nbsp;&nbsp;&nbsp; text += <span style=\"color:brown\">\"The number is \"</span> + i + <span style=\"color:brown\">\"&lt;br&gt;\"</span>;<br>}<span style=\"color:red\">\n</span> </span></div>\n<p>The result of <em>text</em> will be:</p>\n<div class=\"w3-code notranslate\">\n The number is 0<br>The number is 1<br>The number is 2<br>The number is 4</div>\n\n" },
          code:""
        }, {
          "title": "debugger",
          "descHtml": "Stops the execution of JavaScript, and calls (if available) the debugging function",
          "ex": {
            "files": [],
            "code": []
          },
          "todo": [],
          "cols": 2,
          "info": { "syntax": "\n debugger;", "parameters": "", "example": "\n<h3>Example</h3>\n <p>With the debugger turned on, this code should stop executing before it \nexecutes the third line:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\"><span style=\"color:red\">\n</span> <span style=\"color:mediumblue\">var</span> x = <span style=\"color:red\">15</span> * <span style=\"color:red\">5</span>;<br><span style=\"color:mediumblue\">debugger</span>;<br>document.<span style=\"color:black\">getElementbyId</span>(<span style=\"color:brown\">\"demo\"</span>).<span style=\"color:black\">innerHTML</span> = x; </span></div> \n\n" }
        }, {
          "title": "do ... while",
          "descHtml": "Executes a block of statements and repeats the block while a condition is \ntrue",
          "ex": {
            "files": [],
            "code": []
          },
          "todo": [],
          "cols": 2,
          "info": { "syntax": "\n\ndo {\n     code block to be executed\n}\nwhile (condition);", "parameters": "<table> \n <tbody><tr>\n <th style=\"width:23%\">Parameter</th>\n <th>Description</th> </tr> \n <tr>\n <td><em>condition</em></td>\n <td>Required. Defines the condition for running the loop (the code block). If it returns true, the loop will start over again, if it returns false, the loop will end.<br><br><strong>Note:</strong> If the condition is always true, the loop will never end. This will crash your browser.<br><br><strong>\n Note:</strong> If you are using a variable with the condition, initialize it before the loop, and increment it within the loop. If you forget to increase the variable, the loop will never end. This will also crash your browser.</td>\n </tr>\n</tbody></table>", "example": "\n<h3>Example</h3>\n<p>This loop will always be executed at least once, even if the condition is \nfalse, because the code block is executed before the condition is tested:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\"><span style=\"color:red\">\n</span> <span style=\"color:mediumblue\">var</span> text = <span style=\"color:brown\">\"\"</span>;<br><span style=\"color:mediumblue\">var</span> i = <span style=\"color:red\">0</span>;<br><span style=\"color:mediumblue\">do</span> {<br><span style=\"color:red\">\n</span>&nbsp;&nbsp;&nbsp; text += <span style=\"color:brown\">\"The number is \"</span> + i;<br><span style=\"color:red\">\n</span>&nbsp;&nbsp;&nbsp; i++;<br><span style=\"color:red\">\n</span> }<br>\n<span style=\"color:mediumblue\">while</span> (i &lt; <span style=\"color:red\">5</span>); </span></div>\n <p>The result of <em>text</em> will be:</p>\n<div class=\"w3-code notranslate\">\n The number is 0<br>The number is 1<br>The number is 2<br>The number is 3<br>\n The number is 4</div>\n\n" }
        }, {
          "title": "for",
          "descHtml": "Marks a block of statements to be executed as long as a condition is true",
          "ex": {
            "files": [],
            "code": []
          },
          "todo": [],
          "cols": 2,
          "info": { "syntax": "\n for (statement 1; statement 2; statement 3) {    code block to be executed}", "parameters": "<table> \n <tbody><tr>\n <th style=\"width:23%\">Parameter</th>\n <th>Description</th> </tr> \n <tr>\n <td><em>statement1</em></td>\n <td>Optional. Executed before the loop (the code block) starts. Normally this statement is used to initialize a counter variable. To initiate multiple values, separate each value with a comma.<br><br><strong>\n Note:</strong> This parameter can be omitted. However, do not omit the semicolon \";\"</td>\n </tr>\n <tr>\n <td><em>statement2</em></td>\n <td>Optional. Defines the condition for running the loop (the code block). Normally this statement is used to evaluate the condition of the counter variable. If it returns true, the loop will start over again, if it returns false, the loop will end.<br><br><strong>Note:</strong> This parameter can be omitted. However, do not omit the semicolon \";\". Also, if you omit this parameter, you must provide a break inside the loop. Otherwise the loop will never end, which will crash your browser</td>\n </tr>\n <tr>\n <td><em>statement3</em></td>\n <td>Optional. Executed each time after the loop (the code block) has been executed. Normally this statement is used to increment or decrement the counter variable.<br><br><strong>Note:</strong> This parameter can be omitted (e.g. to increase/decrease values inside the loop)</td>\n </tr>\n</tbody></table>", "example": "\n<h3>Example</h3>\n<p>Loop through a block of code five times:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\"><span style=\"color:red\">\n</span> <span style=\"color:mediumblue\">var</span> text = <span style=\"color:brown\">\"\"</span>;<br><span style=\"color:mediumblue\">var</span> i;<br><span style=\"color:mediumblue\">for</span> (i = <span style=\"color:red\">0</span>; i &lt; <span style=\"color:red\">5</span>; i++) {<br>&nbsp;&nbsp;&nbsp; text += <span style=\"color:brown\">\"The number is \"</span> + i + <span style=\"color:brown\">\"&lt;br&gt;\"</span>;<br>} </span></div>\n <p>The result of <em>text</em> will be:</p>\n<div class=\"w3-code notranslate\">\n The number is 0<br>The number is 1<br>The number is 2<br>The number is 3<br>\n The number is 4</div>\n\n" }
        }, {
          "title": "for ... in ",
          "descHtml": "Marks a block of statements to be executed for each element of an object (or \narray)",
          "ex": {
            "files": [],
            "code": []
          },
          "todo": [],
          "cols": 2,
          "info": { "syntax": "\n for (var in\n object) {    code block to be executed}", "parameters": "<table> \n <tbody><tr>\n <th style=\"width:23%\">Parameter</th>\n <th>Description</th> </tr> \n <tr>\n <td><em>var</em></td>\n <td>Required. A variable that iterates over the properties of an object</td>\n </tr>\n <tr>\n <td><em>object</em></td>\n <td>Required. The specified object that will be iterated</td>\n </tr>\n</tbody></table>", "example": "\n<h3>Example</h3>\n<p>Loop through the properties of an object:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\"><span style=\"color:red\">\n</span> <span style=\"color:mediumblue\">var</span> person = {fname:<span style=\"color:brown\">\"John\"</span>, lname:<span style=\"color:brown\">\"Doe\"</span>, age:<span style=\"color:red\">25</span>}; <br><span style=\"color:red\">\n</span><br><span style=\"color:red\">\n</span> <span style=\"color:mediumblue\">var</span> text = <span style=\"color:brown\">\"\"</span>;<br><span style=\"color:mediumblue\">var</span> x;<br><span style=\"color:mediumblue\">for</span> (x <span style=\"color:mediumblue\">in</span> person) {<br><span style=\"color:red\">\n</span>&nbsp;&nbsp;&nbsp; text += person[x] + <span style=\"color:brown\">\" \"</span>;<br><span style=\"color:red\">\n</span> } </span></div> \n<p>The result of <em>text</em> will be:</p>\n<div class=\"w3-code notranslate\">\n John Doe 25</div>\n\n" }
        }, {
          "title": "function",
          "descHtml": "Declares a function",
          "ex": {
            "files": [],
            "code": []
          },
          "todo": [],
          "cols": 2,
          "info": { "syntax": "\n function functionName(parameters) {\n    code to be executed\n}\n", "parameters": "<table> \n <tbody><tr>\n <th style=\"width:23%\">Parameter</th>\n <th>Description</th> </tr> \n <tr>\n <td><em>functionName</em></td>\n <td>Required. Specifies the name of the function, which can be \"saved for later use\". Function names can contain letters, digits, underscores, and dollar signs (same rules as variables)</td>\n </tr>\n <tr>\n <td><em>parameters</em></td>\n <td>Optional. Specifies a set of zero or more parameter names, separated by commas. <br><br>Function parameters are the names listed in the function definition.<br><br>Function arguments are the real values received by the function when it is invoked. Inside the function, the arguments are used as local variables.<br><br><strong>Note:</strong> If a function is called with a missing argument, the value of the missing argument is set to\n <strong>undefined</strong></td>\n </tr>\n</tbody></table>", "example": "\n<h3>Example</h3>\n<p>Declare a function and output \"Hello World\" in an element with \nid=\"demo\", when the function is called:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\"><span style=\"color:red\">\n</span> <span style=\"color:mediumblue\">function</span> myFunction() { <span style=\"color:green\">// Declare a function<br></span>&nbsp;&nbsp;&nbsp; document.<span style=\"color:black\">getElementById</span>(<span style=\"color:brown\">\"demo\"</span>).<span style=\"color:black\">innerHTML</span> = <span style=\"color:brown\">\"Hello World!\"</span>;<br>}<br>&nbsp;<br><span style=\"color:red\">\n</span> myFunction(); <span style=\"color:green\">// Call the function </span></span></div>\n\n" }
        }, {
          "title": "if ... else ... else if",
          "descHtml": "Marks a block of statements to be executed depending on a condition",
          "ex": {
            "files": [],
            "code": []
          },
          "todo": [],
          "cols": 2,
          code:"var i=2;\nif(i<5){\n\tconsole.log('<<<<');\n}",
          "info": { "syntax": "\nif (condition) {\n     block of code to be executed if the condition is true\n }\nif (condition) {\n     block of code to be executed if the condition is true\n }\nelse {\n\n     block of code to be executed if the condition is false\n }\n\nif (condition1) {\n     block of code to be executed if condition1 is true\n }\nelse if (condition2) {\n     block of code to be executed if the condition1 is false and condition2 is true\n} else {\n     block of code to be executed if the condition1 is false and condition2 is false\n }", "parameters": "<table> \n <tbody><tr>\n <th style=\"width:23%\">Parameter</th>\n <th>Description</th> </tr> \n <tr>\n <td><em>condition</em></td>\n <td>Required. An expression that evaluates to true or false</td>\n </tr>\n</tbody></table>", "example": "\n<h3>Example</h3>\n<p>If the current time (HOUR) is less than 20:00, output \"Good \nday\" in an element with id=\"demo\":</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\"><span style=\"color:red\">\n</span> <span style=\"color:mediumblue\">var</span> time = <span style=\"color:mediumblue\">new</span> Date().<span style=\"color:black\">getHours</span>(); <br><span style=\"color:mediumblue\">if</span> (time &lt; <span style=\"color:red\">20</span>) {<br><span style=\"color:red\">\n</span> &nbsp;&nbsp;&nbsp; document.<span style=\"color:black\">getElementById</span>(<span style=\"color:brown\">\"demo\"</span>).<span style=\"color:black\">innerHTML</span> = <span style=\"color:brown\">\"Good day\"</span>;<br><span style=\"color:red\">\n</span> } </span></div>\n<p>The result will be:</p>\n<div class=\"w3-code notranslate\">\n<script>\nvar d=new Date();\nvar time=d.getHours();\nif (time<20)\n {\n document.write(\"Good day\");\n }" }
        }, {
          "title": "return",
          "descHtml": "Stops the execution of a function and returns a value from that function",
          "ex": {
            "files": [],
            "code": []
          },
          "todo": [],
          "cols": 2,
          "info": { "syntax": "\n return value;", "parameters": "<table> \n <tbody><tr>\n <th style=\"width:23%\">Parameter</th>\n <th>Description</th> </tr> \n <tr>\n <td><em>value</em></td>\n <td>Optional. Specifies the value to be returned to the function caller. If omitted, it returns <strong>undefined</strong></td>\n </tr>\n</tbody></table>", "example": "\n<h3>Example</h3>\n<p>Return the value of PI:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\"><span style=\"color:red\">\n</span> <span style=\"color:mediumblue\">function</span> myFunction() {<br>&nbsp;&nbsp;&nbsp; <span style=\"color:mediumblue\">return</span> Math.<span style=\"color:black\">PI</span>;<br>} </span></div>\n <p>The result will be:</p>\n<div class=\"w3-code notranslate\">\n 3.141592653589793</div>\n\n" }
        }, {
          "title": "switch",
          "descHtml": "Marks a block of statements to be executed depending on different cases",
          "ex": {
            "files": [],
            "code": []
          },
          "todo": [],
          "cols": 2,
          "info": { "syntax": "\nswitch(expression) {\n   \ncase n:\n         code block\n         break;\n   \ncase n:\n         code block\n         break;\n   \ndefault:\n         default code block\n }", "parameters": "<table> \n <tbody><tr>\n <th style=\"width:23%\">Parameter</th>\n <th>Description</th> </tr> \n <tr>\n <td><em>expression</em></td>\n <td>Required. Specifies an expression to be evaluated. The expression is evaluated once. The value of the expression is compared with the values of each case labels in the structure. If there is a match, the associated block of code is executed</td>\n </tr>\n</tbody></table>", "example": "\n<h3>Example</h3>\n<p>Execute a block of code based on user input:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\"><span style=\"color:red\">\n</span> <span style=\"color:mediumblue\">var</span> text;<br><span style=\"color:mediumblue\">var</span> fruits = document.<span style=\"color:black\">getElementById</span>(<span style=\"color:brown\">\"myInput\"</span>).<span style=\"color:black\">value</span>;<br><br><span style=\"color:red\">\n</span> <span style=\"color:mediumblue\">switch</span>(fruits) {<br>&nbsp;&nbsp;&nbsp; <span style=\"color:mediumblue\">case</span> <span style=\"color:brown\">\"Banana\"</span>:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; text = <span style=\"color:brown\">\"Banana is good!\"</span>;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style=\"color:mediumblue\">break</span>;<br><span style=\"color:red\">\n</span> &nbsp;&nbsp;&nbsp; <span style=\"color:mediumblue\">case</span> <span style=\"color:brown\">\"Orange\"</span>:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; text = <span style=\"color:brown\">\"I am not a fan of orange.\"</span>;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style=\"color:mediumblue\">break</span>;<br>&nbsp;&nbsp;&nbsp; <span style=\"color:mediumblue\">case</span> <span style=\"color:brown\">\"Apple\"</span>:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; text = <span style=\"color:brown\">\"How you like them apples?\"</span>;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style=\"color:mediumblue\">break</span>;<br>&nbsp;&nbsp;&nbsp; <span style=\"color:mediumblue\">default</span>:<br><span style=\"color:red\">\n</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color:red\">\n</span> text = <span style=\"color:brown\">\"I have never heard of that fruit...\"</span>;<br>} </span></div>\n<p>The result of <em>text</em> could be:</p>\n<div class=\"w3-code notranslate\">\n How you like them apples?</div>\n\n" }
        }, {
          "title": "throw",
          "descHtml": "Throws (generates) an error",
          "ex": {
            "files": [],
            "code": []
          },
          "todo": [],
          "cols": 2,
          "info": { "syntax": "\n throw expression;", "parameters": "<table> \n <tbody><tr>\n <th style=\"width:23%\">Parameter</th>\n <th>Description</th> </tr> \n <tr>\n <td><em>expression</em></td>\n <td>Required. The exception to throw. Can be a string, number, boolean or an object</td>\n </tr>\n</tbody></table>", "example": "\n<h3>Example</h3>\n<p>This example examines input. If the value is wrong, \nan exception (err) is thrown.</p>\n<p>The exception (err) is caught by the catch statement and a custom error message is displayed:</p>\n\n<div class=\"w3-code notranslate htmlHigh\">\n<span style=\"color:brown\"><span style=\"color:mediumblue\">&lt;</span>!DOCTYPE<span style=\"color:red\"> html</span><span style=\"color:mediumblue\">&gt;</span></span><br><span style=\"color:brown\"><span style=\"color:mediumblue\">&lt;</span>html<span style=\"color:mediumblue\">&gt;</span></span><br><span style=\"color:brown\"><span style=\"color:mediumblue\">&lt;</span>body<span style=\"color:mediumblue\">&gt;</span></span><br><br><span style=\"color:brown\"><span style=\"color:mediumblue\">&lt;</span>p<span style=\"color:mediumblue\">&gt;</span></span>Please input a number between \n5 and 10:<span style=\"color:brown\"><span style=\"color:mediumblue\">&lt;</span>/p<span style=\"color:mediumblue\">&gt;</span></span><br><br><span style=\"color:brown\"><span style=\"color:mediumblue\">&lt;</span>input<span style=\"color:red\"> id<span style=\"color:mediumblue\">=\"demo\"</span> type<span style=\"color:mediumblue\">=\"text\"</span></span><span style=\"color:mediumblue\">&gt;</span></span><br><span style=\"color:brown\"><span style=\"color:mediumblue\">&lt;</span>button<span style=\"color:red\"> type<span style=\"color:mediumblue\">=\"button\"</span> \nonclick<span style=\"color:mediumblue\">=\"myFunction()\"</span></span><span style=\"color:mediumblue\">&gt;</span></span>Test Input<span style=\"color:brown\"><span style=\"color:mediumblue\">&lt;</span>/button<span style=\"color:mediumblue\">&gt;</span></span><br><span style=\"color:brown\"><span style=\"color:mediumblue\">&lt;</span>p<span style=\"color:red\"> id<span style=\"color:mediumblue\">=\"message\"</span></span><span style=\"color:mediumblue\">&gt;</span></span><span style=\"color:brown\"><span style=\"color:mediumblue\">&lt;</span>/p<span style=\"color:mediumblue\">&gt;</span></span><br><br>\n<span style=\"color:brown\"><span style=\"color:mediumblue\">&lt;</span>script<span style=\"color:mediumblue\">&gt;</span></span><span style=\"color:black\"><br><span style=\"color:mediumblue\">function</span> myFunction() {<br>&nbsp;&nbsp;&nbsp; <span style=\"color:mediumblue\">var</span> message, x;<br>&nbsp;&nbsp;&nbsp; message = \ndocument.<span style=\"color:black\">getElementById</span>(<span style=\"color:brown\">\"message\"</span>);<br>&nbsp;&nbsp;&nbsp; message.<span style=\"color:black\">innerHTML</span> = <span style=\"color:brown\">\"\"</span>;<br><span style=\"color:red\">\n</span>&nbsp;&nbsp;&nbsp;&nbsp;x = \ndocument.<span style=\"color:black\">getElementById</span>(<span style=\"color:brown\">\"demo\"</span>).<span style=\"color:black\">value</span>;<br>&nbsp;&nbsp;&nbsp; \n<span style=\"color:mediumblue\">try</span> { <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \n<span style=\"color:mediumblue\">if</span>(x == <span style=\"color:brown\">\"\"</span>) <span style=\"color:mediumblue\">throw</span> <span style=\"color:brown\">\"is Empty\"</span>;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \n<span style=\"color:mediumblue\">if</span>(isNaN(x)) <span style=\"color:mediumblue\">throw</span> <span style=\"color:brown\">\"not a number\"</span>;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \n<span style=\"color:mediumblue\">if</span>(x &gt; <span style=\"color:red\">10</span>) <span style=\"color:mediumblue\">throw</span> <span style=\"color:brown\">\"too high\"</span>;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \n<span style=\"color:mediumblue\">if</span>(x &lt; <span style=\"color:red\">5</span>) <span style=\"color:mediumblue\">throw</span> <span style=\"color:brown\">\"too low\"</span>;<br>&nbsp;&nbsp;&nbsp; }<br>&nbsp;&nbsp;&nbsp; \n<span style=\"color:mediumblue\">catch</span>(err) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; message.<span style=\"color:black\">innerHTML</span> = \n<span style=\"color:brown\">\"Input \"</span> + err;<br>&nbsp;&nbsp;&nbsp; }<br>}<br></span><span style=\"color:brown\"><span style=\"color:mediumblue\">&lt;</span>/script<span style=\"color:mediumblue\">&gt;</span></span><br><br><span style=\"color:brown\"><span style=\"color:mediumblue\">&lt;</span>/body<span style=\"color:mediumblue\">&gt;</span></span><br><span style=\"color:brown\"><span style=\"color:mediumblue\">&lt;</span>/html<span style=\"color:mediumblue\">&gt;</span></span> </div>\n\n" }
        }, {
          "title": "try ... catch ... finally",
          "descHtml": "Marks the block of statements to be executed when an error occurs in a try \nblock, and implements error handling",
          "ex": {
            "files": [],
            "code": []
          },
          "todo": [],
          "cols": 2,
          "info": { "syntax": "\n try {    tryCode - Block of code to try}catch(err) {    \n catchCode -\n Block of code to handle errors} finally {    \n finallyCode - Block of code to be executed regardless of the try / catch result}", "parameters": "<table> \n <tbody><tr>\n <th style=\"width:23%\">Parameter</th>\n <th>Description</th> </tr> \n <tr>\n <td><em>tryCode</em></td>\n <td>Required. Block of code to be tested for errors while it is being executed</td>\n </tr>\n <tr>\n <td><em>err</em></td>\n <td>Required if used with catch. Specifies a local variable that refers to the error. The variable can refer to the Error object (contains information about the occurred error, like the message \"'addlert' is not defined\"). If the exception was created by the throw statement, the variable refers to the object specified in the throw statement (see \"More Examples\")</td>\n </tr>\n <tr>\n <td><em>catchCode</em></td>\n <td>Optional. Block of code to be executed, if an error occurs in the try block. If no error occurs, this block of code is never executed</td>\n </tr>\n <tr>\n <td><em>finallyCode</em></td>\n <td>Optional. Block of code to be executed regardless of the try / catch result</td>\n </tr>\n</tbody></table>", "example": "\n<h3>Example</h3>\n<p>In this example, we have made a typo in the code (in the <strong>try \nblock</strong>). </p>\n <p>The example is supposed to alert \"Welcome guest!\", but alert is misspelled.</p>\n <p>The <strong>catch block</strong> catches the error, and executes a code \nto handle it:</p>\n<div class=\"w3-code notranslate htmlHigh\">\n <span style=\"color:brown\"><span style=\"color:mediumblue\">&lt;</span>!DOCTYPE<span style=\"color:red\"> html</span><span style=\"color:mediumblue\">&gt;</span></span><br><span style=\"color:brown\"><span style=\"color:mediumblue\">&lt;</span>html<span style=\"color:mediumblue\">&gt;</span></span><br><span style=\"color:brown\"><span style=\"color:mediumblue\">&lt;</span>body<span style=\"color:mediumblue\">&gt;</span></span><br><br><span style=\"color:brown\"><span style=\"color:mediumblue\">&lt;</span>p<span style=\"color:red\"> id<span style=\"color:mediumblue\">=\"demo\"</span></span><span style=\"color:mediumblue\">&gt;</span></span><span style=\"color:brown\"><span style=\"color:mediumblue\">&lt;</span>/p<span style=\"color:mediumblue\">&gt;</span></span><br><br><span style=\"color:brown\"><span style=\"color:mediumblue\">&lt;</span>script<span style=\"color:mediumblue\">&gt;</span></span><span style=\"color:black\"><br><span style=\"color:red\">\n</span> <span style=\"color:mediumblue\">try</span> {<br>&nbsp;&nbsp;&nbsp; adddlert(<span style=\"color:brown\">\"Welcome guest!\"</span>);<br>}<br><span style=\"color:mediumblue\">catch</span>(err) {<br>&nbsp;&nbsp;&nbsp; document.<span style=\"color:black\">getElementById</span>(<span style=\"color:brown\">\"demo\"</span>).<span style=\"color:black\">innerHTML</span> = err.<span style=\"color:black\">message</span>;<br>}<br></span><span style=\"color:brown\"><span style=\"color:mediumblue\">&lt;</span>/script<span style=\"color:mediumblue\">&gt;</span></span><br>\n <br><span style=\"color:brown\"><span style=\"color:mediumblue\">&lt;</span>/body<span style=\"color:mediumblue\">&gt;</span></span><br><span style=\"color:brown\"><span style=\"color:mediumblue\">&lt;</span>/html<span style=\"color:mediumblue\">&gt;</span></span> </div>\n\n" }
        }, {
          "title": "var",
          "descHtml": "Declares a variable",
          "ex": {
            "files": [],
            "code": []
          },
          "todo": [],
          "cols": 2,
          "info": { "syntax": "\nvar carName;\n\ncarName = \"Volvo\";\n\nvar carName = \"Volvo\";\n var varname = value;", "parameters": "<table> \n <tbody><tr>\n <th style=\"width:23%\">Parameter</th>\n <th>Description</th> </tr> \n <tr>\n <td><em>varname</em></td>\n <td>Required. Specifies the name of the variable.<p>Variable names can contain letters, digits, underscores, and dollar signs.</p>\n<ul>\n <li>Variable names must begin with a letter</li>\n <li>Variable names can also begin with $ and _</li>\n <li>Variable names are case sensitive (y and Y are different variables)</li>\n <li>Reserved words (like JavaScript keywords) cannot be used as variable names</li>\n</ul>\n\n </td>\n </tr>\n <tr>\n <td><em>value</em></td>\n <td>Optional. Specifies the value to assign to the variable. <br><br>\n <strong>Note:</strong> A variable declared without a value will have the value <strong>undefined</strong></td>\n </tr>\n</tbody></table>", "example": "\n<h3>Example</h3>\n<p>Create a variable called carName and assign the value \"Volvo\" to it:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\"><span style=\"color:red\">\n</span> <span style=\"color:mediumblue\">var</span> carName = <span style=\"color:brown\">\"Volvo\"</span>; </span></div>\n\n" }
        }, {
          "title": "while",
          "descHtml": "Marks a block of statements to be executed while a condition is true",
          "ex": {
            "files": [],
            "code": []
          },
          "todo": [],
          "cols": 2,
          "info": { "syntax": "\n while (condition) {    code block to be executed}", "parameters": "<table> \n <tbody><tr>\n <th style=\"width:23%\">Parameter</th>\n <th>Description</th> </tr> \n <tr>\n <td><em>condition</em></td>\n <td>Required. Defines the condition for running the loop (the code block). If it returns true, the loop will start over again, if it returns false, the loop will end.<br><br><strong>Note:</strong> If the condition is always true, the loop will never end. This will crash your browser.<br><br><strong>\n Note:</strong> If you are using a variable with the condition, initialize it before the loop, and increment it within the loop. If you forget to increase the variable, the loop will never end. This will also crash your browser.</td>\n </tr>\n</tbody></table>", "example": "\n<h3>Example</h3>\n<p>Loop through a block of code as long as a variable (i) is less than 5:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\"><span style=\"color:red\">\n</span> <span style=\"color:mediumblue\">var</span> text = <span style=\"color:brown\">\"\"</span>;<br><span style=\"color:mediumblue\">var</span> i = <span style=\"color:red\">0</span>;<br><span style=\"color:mediumblue\">while</span> (i &lt; <span style=\"color:red\">5</span>) {<br>&nbsp;&nbsp;&nbsp; text += <span style=\"color:brown\">\"&lt;br&gt;The number is \"</span> + i;<br>&nbsp;&nbsp;&nbsp; i++;<br>} </span></div>\n <p>The result of <em>text</em> will be:</p>\n<div class=\"w3-code notranslate\">\n The number is 0<br>The number is 1<br>The number is 2<br>The number is 3<br>\n The number is 4</div>\n\n" }
        }]
      }]
    };

    this.jsobj = {
      title: "Javascript Objects",
      desc: "Objects in JavaScript, just as in many other programming languages, can be compared to objects in real life. The concept of objects in JavaScript can be understood with real life, tangible objects.In JavaScript, an object is a standalone entity, with properties and type. Compare it with a cup, for example. A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc. The same way, JavaScript objects can have properties, which define their characteristics.",
      descHtml: "https://developer.mozilla.org/bm/docs/Web/JavaScript/Guide/Working_with_Objects",
      el: [{
        title: "Javascript Objects",
        desc: "Objects in JavaScript, just as in many other programming languages, can be compared to objects in real life. The concept of objects in JavaScript can be understood with real life, tangible objects.In JavaScript, an object is a standalone entity, with properties and type. Compare it with a cup, for example. A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc. The same way, JavaScript objects can have properties, which define their characteristics.",
        descHtml: "https://developer.mozilla.org/bm/docs/Web/JavaScript/Guide/Working_with_Objects",
        el: [{
          title: "Creating objects",
          desc: "",
          el: [{
            title: "Object constructor",
            descHtml: "",
            ex: {
              files: ["obj1.png"]
            },
          },
            {
              title: "Literal constructor",
              descHtml: "",
              ex: {
                files: ["obj2.png"]
              },
            },
            {
              title: "function Constructor",
              descHtml: "",
              ex: {
                files: ["obj3.png"]
              },
            },
            {
              title: "Prototype",
              descHtml: "",
              ex: {
                files: ["obj4.png", "obj4_1.png"]
              },
            },
            {
              title: "Function/Prototype combination",
              descHtml: "",
              ex: {
                files: ["obj5.png"]
              },
            },
            {
              title: "Singleton",
              descHtml: "<a href='https://www.phpied.com/3-ways-to-define-a-javascript-class/' target='_blank'> Explained link</a>",
              ex: {
                files: ["obj6.png"]
              },
            },
          ]
        }, {
          title: "Methods",
          desc: "",
          el: [{
            title: "Object.assign()",
            desc: "Copies the values of all enumerable own properties from one or more source objects to a target object.",
            cols: 2,
            "info": {
              "syntax": "Object.assign(target, ...sources)",
              "parameters": "<dl>\n <dt><code>target</code></dt>\n <dd>The target object.</dd>\n <dt><code>sources</code></dt>\n <dd>The source object(s).</dd>\n</dl>",
              "example": "<h3 id=\"Cloning_an_object\" class=\"highlight-spanned\"><span class=\"highlight-span\">Cloning an object</span></h3><pre class=\"brush: js line-numbers language-js\"><code class=\" language-js\"><span class=\"token keyword\">var</span> obj <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> a<span class=\"token punctuation\">:</span> <span class=\"token number\">1</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">var</span> copy <span class=\"token operator\">=</span> Object<span class=\"token punctuation\">.</span><span class=\"token function\">assign</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> obj<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>copy<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// { a: 1 }</span><span class=\"line-numbers-rows\"><span></span><span></span><span></span></span></code></pre><h3 id=\"Deep_Clone\" name=\"Deep_Clone\" class=\"highlight-spanned\"><span class=\"highlight-span\">Warning for Deep Clone</span></h3><p>For deep cloning,&nbsp;we&nbsp;need to use other&nbsp;alternatives because <code>Object.assign()</code> copies&nbsp;property&nbsp;values. If the source value is a reference to an object, it only copies that&nbsp;reference value.</p><pre class=\"brush: js line-numbers language-js\"><code class=\" language-js\"><span class=\"token keyword\">function</span> <span class=\"token function\">test</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n <span class=\"token string\">'use strict'</span><span class=\"token punctuation\">;</span>\n\n <span class=\"token keyword\">let</span> obj1 <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> a<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span> <span class=\"token punctuation\">,</span> b<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> c<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n <span class=\"token keyword\">let</span> obj2 <span class=\"token operator\">=</span> Object<span class=\"token punctuation\">.</span><span class=\"token function\">assign</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> obj1<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>JSON<span class=\"token punctuation\">.</span><span class=\"token function\">stringify</span><span class=\"token punctuation\">(</span>obj2<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// { a: 0, b: { c: 0}}</span>\n \n obj1<span class=\"token punctuation\">.</span>a <span class=\"token operator\">=</span> <span class=\"token number\">1</span><span class=\"token punctuation\">;</span>\n console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>JSON<span class=\"token punctuation\">.</span><span class=\"token function\">stringify</span><span class=\"token punctuation\">(</span>obj1<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// { a: 1, b: { c: 0}}</span>\n console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>JSON<span class=\"token punctuation\">.</span><span class=\"token function\">stringify</span><span class=\"token punctuation\">(</span>obj2<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// { a: 0, b: { c: 0}}</span>\n \n obj2<span class=\"token punctuation\">.</span>a <span class=\"token operator\">=</span> <span class=\"token number\">2</span><span class=\"token punctuation\">;</span>\n console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>JSON<span class=\"token punctuation\">.</span><span class=\"token function\">stringify</span><span class=\"token punctuation\">(</span>obj1<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// { a: 1, b: { c: 0}}</span>\n console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>JSON<span class=\"token punctuation\">.</span><span class=\"token function\">stringify</span><span class=\"token punctuation\">(</span>obj2<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// { a: 2, b: { c: 0}}</span>\n \n obj2<span class=\"token punctuation\">.</span>b<span class=\"token punctuation\">.</span>c <span class=\"token operator\">=</span> <span class=\"token number\">3</span><span class=\"token punctuation\">;</span>\n console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>JSON<span class=\"token punctuation\">.</span><span class=\"token function\">stringify</span><span class=\"token punctuation\">(</span>obj1<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// { a: 1, b: { c: 3}}</span>\n console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>JSON<span class=\"token punctuation\">.</span><span class=\"token function\">stringify</span><span class=\"token punctuation\">(</span>obj2<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// { a: 2, b: { c: 3}}</span>\n \n <span class=\"token comment\" spellcheck=\"true\">// Deep Clone</span>\n obj1 <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> a<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span> <span class=\"token punctuation\">,</span> b<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> c<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n <span class=\"token keyword\">let</span> obj3 <span class=\"token operator\">=</span> JSON<span class=\"token punctuation\">.</span><span class=\"token function\">parse</span><span class=\"token punctuation\">(</span>JSON<span class=\"token punctuation\">.</span><span class=\"token function\">stringify</span><span class=\"token punctuation\">(</span>obj1<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n obj1<span class=\"token punctuation\">.</span>a <span class=\"token operator\">=</span> <span class=\"token number\">4</span><span class=\"token punctuation\">;</span>\n obj1<span class=\"token punctuation\">.</span>b<span class=\"token punctuation\">.</span>c <span class=\"token operator\">=</span> <span class=\"token number\">4</span><span class=\"token punctuation\">;</span>\n console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>JSON<span class=\"token punctuation\">.</span><span class=\"token function\">stringify</span><span class=\"token punctuation\">(</span>obj3<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// { a: 0, b: { c: 0}}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token function\">test</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span><span class=\"line-numbers-rows\"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre>"
            }
          }, {
            title: "Object.create()",
            desc: "Creates a new object with the specified prototype object and properties.",
            "info": {
              "syntax": "Object.create(proto[, propertiesObject])",
              "parameters": "<dl>\n\t<dt><code>proto</code></dt>\n\t<dd>The object which should be the prototype of the newly-created object.</dd>\n\t<dt><code>propertiesObject</code></dt>\n\t<dd>Optional. If specified and not <a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined\" title=\"The global undefined property represents the primitive value undefined. It is one of JavaScript's primitive types.\"><code>undefined</code></a>, an object whose enumerable own properties (that is, those properties defined upon itself and <em>not</em> enumerable properties along its prototype chain) specify property descriptors to be added to the newly-created object, with the corresponding property names. These properties correspond to the second argument of <a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties\" title=\"The Object.defineProperties() method defines new or modifies existing properties directly on an object, returning the object.\"><code>Object.defineProperties()</code></a>.</dd>\n</dl>",
              "example": "<h3 id=\"Classical_inheritance_with_Object.create()\" class=\"highlight-spanned\"><span class=\"highlight-span\">Classical inheritance with <code>Object.create()</code></span></h3><p>Below is an example of how to use <code>Object.create()</code> to achieve classical inheritance. This is for single inheritance, which is all that JavaScript supports.</p><pre class=\"brush: js line-numbers language-js\"><code class=\" language-js\"><span class=\"token comment\" spellcheck=\"true\">// Shape - superclass</span>\n<span class=\"token keyword\">function</span> <span class=\"token function\">Shape</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>x <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>y <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// superclass method</span>\nShape<span class=\"token punctuation\">.</span>prototype<span class=\"token punctuation\">.</span>move <span class=\"token operator\">=</span> <span class=\"token keyword\">function</span><span class=\"token punctuation\">(</span>x<span class=\"token punctuation\">,</span> y<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>x <span class=\"token operator\">+</span><span class=\"token operator\">=</span> x<span class=\"token punctuation\">;</span>\n <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>y <span class=\"token operator\">+</span><span class=\"token operator\">=</span> y<span class=\"token punctuation\">;</span>\n console<span class=\"token punctuation\">.</span><span class=\"token function\">info</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Shape moved.'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// Rectangle - subclass</span>\n<span class=\"token keyword\">function</span> <span class=\"token function\">Rectangle</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n Shape<span class=\"token punctuation\">.</span><span class=\"token function\">call</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// call super constructor.</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// subclass extends superclass</span>\nRectangle<span class=\"token punctuation\">.</span>prototype <span class=\"token operator\">=</span> Object<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span>Shape<span class=\"token punctuation\">.</span>prototype<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nRectangle<span class=\"token punctuation\">.</span>prototype<span class=\"token punctuation\">.</span>constructor <span class=\"token operator\">=</span> Rectangle<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">var</span> rect <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Rectangle</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Is rect an instance of Rectangle?'</span><span class=\"token punctuation\">,</span>\n rect <span class=\"token keyword\">instanceof</span> <span class=\"token class-name\">Rectangle</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// true</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Is rect an instance of Shape?'</span><span class=\"token punctuation\">,</span>\n rect <span class=\"token keyword\">instanceof</span> <span class=\"token class-name\">Shape</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// true</span>\nrect<span class=\"token punctuation\">.</span><span class=\"token function\">move</span><span class=\"token punctuation\">(</span><span class=\"token number\">1</span><span class=\"token punctuation\">,</span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// Outputs, 'Shape moved.'</span><span class=\"line-numbers-rows\"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre><p>If you wish to inherit from multiple objects, then mixins are a possibility.</p><pre class=\"brush: js line-numbers language-js\"><code class=\" language-js\"><span class=\"token keyword\">function</span> <span class=\"token function\">MyClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n SuperClass<span class=\"token punctuation\">.</span><span class=\"token function\">call</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n OtherSuperClass<span class=\"token punctuation\">.</span><span class=\"token function\">call</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// inherit one class</span>\nMyClass<span class=\"token punctuation\">.</span>prototype <span class=\"token operator\">=</span> Object<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span>SuperClass<span class=\"token punctuation\">.</span>prototype<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token comment\" spellcheck=\"true\">// mixin another</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">assign</span><span class=\"token punctuation\">(</span>MyClass<span class=\"token punctuation\">.</span>prototype<span class=\"token punctuation\">,</span> OtherSuperClass<span class=\"token punctuation\">.</span>prototype<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token comment\" spellcheck=\"true\">// re-assign constructor</span>\nMyClass<span class=\"token punctuation\">.</span>prototype<span class=\"token punctuation\">.</span>constructor <span class=\"token operator\">=</span> MyClass<span class=\"token punctuation\">;</span>\n\nMyClass<span class=\"token punctuation\">.</span>prototype<span class=\"token punctuation\">.</span>myMethod <span class=\"token operator\">=</span> <span class=\"token keyword\">function</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n <span class=\"token comment\" spellcheck=\"true\">// do a thing</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span><span class=\"line-numbers-rows\"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre>"
            }
          }, {
            title: "Object.defineProperty()",
            desc: "Adds the named property described by a given descriptor to an object.",
            "info": {
              "syntax": "Object.defineProperty(obj, prop, descriptor)",
              "parameters": "<dl>\n <dt><code>obj</code></dt>\n <dd>The object on which to define the property.</dd>\n <dt><code>prop</code></dt>\n <dd>The name of the property to be defined or modified.</dd>\n <dt><code>descriptor</code></dt>\n <dd>The descriptor for the property being defined or modified.</dd>\n</dl>",
              "example": "<p>If you want to see how to use the <code>Object.defineProperty</code> method with a <em>binary-flags-like</em> syntax, see <a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty/Additional_examples\">additional examples</a>.</p><h3 id=\"Creating_a_property\" class=\"highlight-spanned\"><span class=\"highlight-span\">Creating a property</span></h3><p>When the property specified doesn't exist in the object, <code>Object.defineProperty()</code> creates a new property as described. Fields may be omitted from the descriptor, and default values for those fields are inputted. All of the Boolean-valued fields default to <code>false</code>. The <code>value</code>, <code>get</code>, and <code>set</code> fields default to <a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined\" title=\"The global undefined property represents the primitive value undefined. It is one of JavaScript's primitive types.\"><code>undefined</code></a>. A property which is defined without <code>get</code>/<code>set</code>/<code>value</code>/<code>writable</code> is called “generic” and is “typed” as a data descriptor.</p><pre class=\"brush: js line-numbers language-js\"><code class=\" language-js\"><span class=\"token keyword\">var</span> o <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// Creates a new object</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// Example of an object property added</span>\n<span class=\"token comment\" spellcheck=\"true\">// with defineProperty with a data property descriptor</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">defineProperty</span><span class=\"token punctuation\">(</span>o<span class=\"token punctuation\">,</span> <span class=\"token string\">'a'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n value<span class=\"token punctuation\">:</span> <span class=\"token number\">37</span><span class=\"token punctuation\">,</span>\n writable<span class=\"token punctuation\">:</span> <span class=\"token keyword\">true</span><span class=\"token punctuation\">,</span>\n enumerable<span class=\"token punctuation\">:</span> <span class=\"token keyword\">true</span><span class=\"token punctuation\">,</span>\n configurable<span class=\"token punctuation\">:</span> <span class=\"token keyword\">true</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token comment\" spellcheck=\"true\">// 'a' property exists in the o object and its value is 37</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// Example of an object property added</span>\n<span class=\"token comment\" spellcheck=\"true\">// with defineProperty with an accessor property descriptor</span>\n<span class=\"token keyword\">var</span> bValue <span class=\"token operator\">=</span> <span class=\"token number\">38</span><span class=\"token punctuation\">;</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">defineProperty</span><span class=\"token punctuation\">(</span>o<span class=\"token punctuation\">,</span> <span class=\"token string\">'b'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n <span class=\"token keyword\">get</span><span class=\"token punctuation\">:</span> <span class=\"token keyword\">function</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span> <span class=\"token keyword\">return</span> bValue<span class=\"token punctuation\">;</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n <span class=\"token keyword\">set</span><span class=\"token punctuation\">:</span> <span class=\"token keyword\">function</span><span class=\"token punctuation\">(</span>newValue<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span> bValue <span class=\"token operator\">=</span> newValue<span class=\"token punctuation\">;</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n enumerable<span class=\"token punctuation\">:</span> <span class=\"token keyword\">true</span><span class=\"token punctuation\">,</span>\n configurable<span class=\"token punctuation\">:</span> <span class=\"token keyword\">true</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\no<span class=\"token punctuation\">.</span>b<span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// 38</span>\n<span class=\"token comment\" spellcheck=\"true\">// 'b' property exists in the o object and its value is 38</span>\n<span class=\"token comment\" spellcheck=\"true\">// The value of o.b is now always identical to bValue,</span>\n<span class=\"token comment\" spellcheck=\"true\">// unless o.b is redefined</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// You cannot try to mix both:</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">defineProperty</span><span class=\"token punctuation\">(</span>o<span class=\"token punctuation\">,</span> <span class=\"token string\">'conflict'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n value<span class=\"token punctuation\">:</span> <span class=\"token number\">0x9f91102</span><span class=\"token punctuation\">,</span>\n <span class=\"token keyword\">get</span><span class=\"token punctuation\">:</span> <span class=\"token keyword\">function</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span> <span class=\"token keyword\">return</span> <span class=\"token number\">0xdeadbeef</span><span class=\"token punctuation\">;</span> <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token comment\" spellcheck=\"true\">// throws a TypeError: value appears</span>\n<span class=\"token comment\" spellcheck=\"true\">// only in data descriptors,</span>\n<span class=\"token comment\" spellcheck=\"true\">// get appears only in accessor descriptors</span><span class=\"line-numbers-rows\"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre><h3 id=\"Modifying_a_property\" class=\"highlight-spanned\"><span class=\"highlight-span\">Modifying a property</span></h3>"
            }
          }, {
            title: "Object.defineProperties()",
            desc: "Adds the named properties described by the given descriptors to an object.",
            "info": {
              "syntax": "Object.defineProperties(obj, props)",
              "parameters": "<dl>\n <dt><code>obj</code></dt>\n <dd>The object on which to define or modify properties.</dd>\n <dt><code>props</code></dt>\n <dd>An object whose own enumerable properties constitute descriptors for the properties to be defined or modified. Property descriptors present in objects come in two main flavors: data descriptors and accessor descriptors (see <a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty\" title=\"The Object.defineProperty() method defines a new property directly on an object, or modifies an existing property on an object, and returns the object.\"><code>Object.defineProperty()</code></a> for more details).&nbsp;Descriptors have the following keys:</dd>\n <dd>\n <dl>\n <dt><code>configurable</code></dt>\n <dd><code>true</code> if and only if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object.<br>\n <strong>Defaults to <code>false</code>.</strong></dd>\n <dt><code>enumerable</code></dt>\n <dd><code>true</code> if and only if this property shows up during enumeration of the properties on the corresponding object.<br>\n <strong>Defaults to <code>false</code>.</strong></dd>\n </dl>\n\n <dl>\n <dt><code>value</code></dt>\n <dd>The value associated with the property. Can be any valid JavaScript value (number, object, function, etc).<br>\n <strong>Defaults to <a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined\" title=\"The global undefined property represents the primitive value undefined. It is one of JavaScript's primitive types.\"><code>undefined</code></a>.</strong></dd>\n <dt><code>writable</code></dt>\n <dd><code>true</code> if and only if the value associated with the property may be changed with an <a href=\"/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators\" title=\"An assignment operator assigns a value to its left operand based on the value of its right operand.\">assignment operator</a>.<br>\n <strong>Defaults to <code>false</code>.</strong></dd>\n </dl>\n\n <dl>\n <dt><code>get</code></dt>\n <dd>A function which serves as a getter for the property, or <a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined\" title=\"The global undefined property represents the primitive value undefined. It is one of JavaScript's primitive types.\"><code>undefined</code></a> if there is no getter. The function return will be used as the value of property.<br>\n <strong>Defaults to <a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined\" title=\"The global undefined property represents the primitive value undefined. It is one of JavaScript's primitive types.\"><code>undefined</code></a>.</strong></dd>\n <dt><code>set</code></dt>\n <dd>A function which serves as a setter for the property, or <a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined\" title=\"The global undefined property represents the primitive value undefined. It is one of JavaScript's primitive types.\"><code>undefined</code></a> if there is no setter. The function will receive as only argument the new value being assigned to the property.<br>\n <strong>Defaults to <a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined\" title=\"The global undefined property represents the primitive value undefined. It is one of JavaScript's primitive types.\"><code>undefined</code></a>.</strong></dd>\n </dl>\n </dd>\n</dl>",
              "example": "undefinedundefinedundefinedundefinedundefined"
            }
          }, {
            title: "Object.entries()",
            desc: "Returns an array of a given object's own enumerable property [key, value] pairs.",
            "info": {
              "syntax": "Object.entries(obj)",
              "parameters": "<dl>\n <dt><code>obj</code></dt>\n <dd>The object whose enumerable own property <code>[key, value]</code> pairs are to be returned.</dd>\n</dl>",
              "example": "<pre class=\"brush: js line-numbers language-js\"><code class=\" language-js\"><span class=\"token keyword\">const</span> obj <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> foo<span class=\"token punctuation\">:</span> <span class=\"token string\">'bar'</span><span class=\"token punctuation\">,</span> baz<span class=\"token punctuation\">:</span> <span class=\"token number\">42</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>Object<span class=\"token punctuation\">.</span><span class=\"token function\">entries</span><span class=\"token punctuation\">(</span>obj<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// [ ['foo', 'bar'], ['baz', 42] ]</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// array like object</span>\n<span class=\"token keyword\">const</span> obj <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> <span class=\"token number\">0</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'a'</span><span class=\"token punctuation\">,</span> <span class=\"token number\">1</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'b'</span><span class=\"token punctuation\">,</span> <span class=\"token number\">2</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'c'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>Object<span class=\"token punctuation\">.</span><span class=\"token function\">entries</span><span class=\"token punctuation\">(</span>obj<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// array like object with random key ordering</span>\n<span class=\"token keyword\">const</span> anObj <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> <span class=\"token number\">100</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'a'</span><span class=\"token punctuation\">,</span> <span class=\"token number\">2</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'b'</span><span class=\"token punctuation\">,</span> <span class=\"token number\">7</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'c'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>Object<span class=\"token punctuation\">.</span><span class=\"token function\">entries</span><span class=\"token punctuation\">(</span>anObj<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// getFoo is property which isn't enumerable</span>\n<span class=\"token keyword\">const</span> myObj <span class=\"token operator\">=</span> Object<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> getFoo<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> <span class=\"token function\">value</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span> <span class=\"token keyword\">return</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>foo<span class=\"token punctuation\">;</span> <span class=\"token punctuation\">}</span> <span class=\"token punctuation\">}</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nmyObj<span class=\"token punctuation\">.</span>foo <span class=\"token operator\">=</span> <span class=\"token string\">'bar'</span><span class=\"token punctuation\">;</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>Object<span class=\"token punctuation\">.</span><span class=\"token function\">entries</span><span class=\"token punctuation\">(</span>myObj<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// [ ['foo', 'bar'] ]</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// non-object argument will be coerced to an object</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>Object<span class=\"token punctuation\">.</span><span class=\"token function\">entries</span><span class=\"token punctuation\">(</span><span class=\"token string\">'foo'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// returns an empty array for any primitive type, since primitives have no own properties</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>Object<span class=\"token punctuation\">.</span><span class=\"token function\">entries</span><span class=\"token punctuation\">(</span><span class=\"token number\">100</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// [ ]</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// iterate through key-value gracefully</span>\n<span class=\"token keyword\">const</span> obj <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> a<span class=\"token punctuation\">:</span> <span class=\"token number\">5</span><span class=\"token punctuation\">,</span> b<span class=\"token punctuation\">:</span> <span class=\"token number\">7</span><span class=\"token punctuation\">,</span> c<span class=\"token punctuation\">:</span> <span class=\"token number\">9</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">const</span> <span class=\"token punctuation\">[</span>key<span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">]</span> <span class=\"token keyword\">of</span> Object<span class=\"token punctuation\">.</span><span class=\"token function\">entries</span><span class=\"token punctuation\">(</span>obj<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>key<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>value<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// \"a 5\", \"b 7\", \"c 9\"</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// Or, using array extras</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">entries</span><span class=\"token punctuation\">(</span>obj<span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">forEach</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">[</span>key<span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">&gt;</span> <span class=\"token punctuation\">{</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>key<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>value<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// \"a 5\", \"b 7\", \"c 9\"</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span><span class=\"line-numbers-rows\"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre><h3 id=\"Converting_an_Object_to_a_Map\" class=\"highlight-spanned\"><span class=\"highlight-span\">Converting an <code>Object</code> to a <code>Map</code></span></h3><p>The <a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map\" title=\"The Map object holds key-value pairs.\"><code>new Map()</code></a> constructor accepts an iterable of <code>entries</code>. With <code>Object.entries</code>, you can easily convert from <a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\" title=\"The Object constructor creates an object wrapper.\"><code>Object</code></a> to <a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map\" title=\"The Map object holds key-value pairs.\"><code>Map</code></a>:</p><pre class=\"brush: js line-numbers language-js\"><code class=\" language-js\"><span class=\"token keyword\">const</span> obj <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> foo<span class=\"token punctuation\">:</span> <span class=\"token string\">'bar'</span><span class=\"token punctuation\">,</span> baz<span class=\"token punctuation\">:</span> <span class=\"token number\">42</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span> \n<span class=\"token keyword\">const</span> map <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Map</span><span class=\"token punctuation\">(</span>Object<span class=\"token punctuation\">.</span><span class=\"token function\">entries</span><span class=\"token punctuation\">(</span>obj<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>map<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// Map { foo: \"bar\", baz: 42 }</span><span class=\"line-numbers-rows\"><span></span><span></span><span></span></span></code></pre><h2 id=\"Polyfill\">Polyfill</h2>"
            },
          },
            {
              title: "Object.freeze()",
              desc: "Freezes an object: other code can't delete or change any properties.",
              "info": {
                "syntax": "Object.freeze(obj)",
                "parameters": "<dl>\n <dt><code>obj</code></dt>\n <dd>The object to freeze.</dd>\n</dl>",
                "example": "<h3 id=\"Freezing_Objects\" class=\"highlight-spanned\"><span class=\"highlight-span\">Freezing Objects</span></h3><pre class=\"brush: js line-numbers language-js\"><code class=\" language-js\"><span class=\"token keyword\">var</span> obj <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n prop<span class=\"token punctuation\">:</span> <span class=\"token keyword\">function</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n foo<span class=\"token punctuation\">:</span> <span class=\"token string\">'bar'</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// New properties may be added, existing properties may be</span>\n<span class=\"token comment\" spellcheck=\"true\">// changed or removed</span>\nobj<span class=\"token punctuation\">.</span>foo <span class=\"token operator\">=</span> <span class=\"token string\">'baz'</span><span class=\"token punctuation\">;</span>\nobj<span class=\"token punctuation\">.</span>lumpy <span class=\"token operator\">=</span> <span class=\"token string\">'woof'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">delete</span> obj<span class=\"token punctuation\">.</span>prop<span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// Both the object being passed as well as the returned</span>\n<span class=\"token comment\" spellcheck=\"true\">// object will be frozen. It is unnecessary to save the</span>\n<span class=\"token comment\" spellcheck=\"true\">// returned object in order to freeze the original.</span>\n<span class=\"token keyword\">var</span> o <span class=\"token operator\">=</span> Object<span class=\"token punctuation\">.</span><span class=\"token function\">freeze</span><span class=\"token punctuation\">(</span>obj<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\no <span class=\"token operator\">===</span> obj<span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// true</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">isFrozen</span><span class=\"token punctuation\">(</span>obj<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// === true</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// Now any changes will fail</span>\nobj<span class=\"token punctuation\">.</span>foo <span class=\"token operator\">=</span> <span class=\"token string\">'quux'</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// silently does nothing</span>\n<span class=\"token comment\" spellcheck=\"true\">// silently doesn't add the property</span>\nobj<span class=\"token punctuation\">.</span>quaxxor <span class=\"token operator\">=</span> <span class=\"token string\">'the friendly duck'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// In strict mode such attempts will throw TypeErrors</span>\n<span class=\"token keyword\">function</span> <span class=\"token function\">fail</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">{</span>\n <span class=\"token string\">'use strict'</span><span class=\"token punctuation\">;</span>\n obj<span class=\"token punctuation\">.</span>foo <span class=\"token operator\">=</span> <span class=\"token string\">'sparky'</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// throws a TypeError</span>\n <span class=\"token keyword\">delete</span> obj<span class=\"token punctuation\">.</span>quaxxor<span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// throws a TypeError</span>\n obj<span class=\"token punctuation\">.</span>sparky <span class=\"token operator\">=</span> <span class=\"token string\">'arf'</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// throws a TypeError</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token function\">fail</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// Attempted changes through Object.defineProperty; </span>\n<span class=\"token comment\" spellcheck=\"true\">// both statements below throw a TypeError.</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">defineProperty</span><span class=\"token punctuation\">(</span>obj<span class=\"token punctuation\">,</span> <span class=\"token string\">'ohai'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> value<span class=\"token punctuation\">:</span> <span class=\"token number\">17</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">defineProperty</span><span class=\"token punctuation\">(</span>obj<span class=\"token punctuation\">,</span> <span class=\"token string\">'foo'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> value<span class=\"token punctuation\">:</span> <span class=\"token string\">'eit'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// It's also impossible to change the prototype</span>\n<span class=\"token comment\" spellcheck=\"true\">// both statements below will throw a TypeError.</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">setPrototypeOf</span><span class=\"token punctuation\">(</span>obj<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> x<span class=\"token punctuation\">:</span> <span class=\"token number\">20</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span>\nobj<span class=\"token punctuation\">.</span>__proto__ <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> x<span class=\"token punctuation\">:</span> <span class=\"token number\">20</span> <span class=\"token punctuation\">}</span><span class=\"line-numbers-rows\"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre><h3 id=\"Freezing_Arrays\" class=\"highlight-spanned\"><span class=\"highlight-span\">Freezing Arrays</span></h3><pre class=\"line-numbers language-html\"><code class=\" language-html\">let a = [0];\nObject.freeze(a); // The array cannot be modified now.\n\na[0]=1; // fails silently\na.push(2); // fails silently\n\n// In strict mode such attempts will throw TypeErrors\nfunction fail() {\n \"use strict\"\n a[0] = 1;\n a.push(2);\n}\n\nfail();<span class=\"line-numbers-rows\"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre><p>The object being frozen is <em>immutable</em>. &nbsp;However, it is not necessarily <em>constant</em>. The following example shows that a frozen object is not constant (freeze is shallow).</p>"
              }
            },
            {
              title: "Object.getOwnPropertyDescriptor()",
              desc: "Returns a property descriptor for a named property on an object.",
              "info": {
                "syntax": "Object.getOwnPropertyDescriptor(obj, prop)",
                "parameters": "<dl>\n <dt><code>obj</code></dt>\n <dd>The object in which to look for the property.</dd>\n <dt><code>prop</code></dt>\n <dd>The name of the property whose description is to be retrieved.</dd>\n</dl>",
                "example": "<pre class=\"brush: js line-numbers language-js\"><code class=\" language-js\"><span class=\"token keyword\">var</span> o<span class=\"token punctuation\">,</span> d<span class=\"token punctuation\">;</span>\n\no <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> <span class=\"token keyword\">get</span> <span class=\"token function\">foo</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span> <span class=\"token keyword\">return</span> <span class=\"token number\">17</span><span class=\"token punctuation\">;</span> <span class=\"token punctuation\">}</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\nd <span class=\"token operator\">=</span> Object<span class=\"token punctuation\">.</span><span class=\"token function\">getOwnPropertyDescriptor</span><span class=\"token punctuation\">(</span>o<span class=\"token punctuation\">,</span> <span class=\"token string\">'foo'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token comment\" spellcheck=\"true\">// d is {</span>\n<span class=\"token comment\" spellcheck=\"true\">// configurable: true,</span>\n<span class=\"token comment\" spellcheck=\"true\">// enumerable: true,</span>\n<span class=\"token comment\" spellcheck=\"true\">// get: </span><span class=\"token comment\" spellcheck=\"true\">/*the getter function*/</span><span class=\"token punctuation\">,</span>\n<span class=\"token comment\" spellcheck=\"true\">// set: undefined</span>\n<span class=\"token comment\" spellcheck=\"true\">// }</span>\n\no <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> bar<span class=\"token punctuation\">:</span> <span class=\"token number\">42</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\nd <span class=\"token operator\">=</span> Object<span class=\"token punctuation\">.</span><span class=\"token function\">getOwnPropertyDescriptor</span><span class=\"token punctuation\">(</span>o<span class=\"token punctuation\">,</span> <span class=\"token string\">'bar'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token comment\" spellcheck=\"true\">// d is {</span>\n<span class=\"token comment\" spellcheck=\"true\">// configurable: true,</span>\n<span class=\"token comment\" spellcheck=\"true\">// enumerable: true,</span>\n<span class=\"token comment\" spellcheck=\"true\">// value: 42,</span>\n<span class=\"token comment\" spellcheck=\"true\">// writable: true</span>\n<span class=\"token comment\" spellcheck=\"true\">// }</span>\n\no <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">defineProperty</span><span class=\"token punctuation\">(</span>o<span class=\"token punctuation\">,</span> <span class=\"token string\">'baz'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n value<span class=\"token punctuation\">:</span> <span class=\"token number\">8675309</span><span class=\"token punctuation\">,</span>\n writable<span class=\"token punctuation\">:</span> <span class=\"token keyword\">false</span><span class=\"token punctuation\">,</span>\n enumerable<span class=\"token punctuation\">:</span> <span class=\"token keyword\">false</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nd <span class=\"token operator\">=</span> Object<span class=\"token punctuation\">.</span><span class=\"token function\">getOwnPropertyDescriptor</span><span class=\"token punctuation\">(</span>o<span class=\"token punctuation\">,</span> <span class=\"token string\">'baz'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token comment\" spellcheck=\"true\">// d is {</span>\n<span class=\"token comment\" spellcheck=\"true\">// value: 8675309,</span>\n<span class=\"token comment\" spellcheck=\"true\">// writable: false,</span>\n<span class=\"token comment\" spellcheck=\"true\">// enumerable: false,</span>\n<span class=\"token comment\" spellcheck=\"true\">// configurable: false</span>\n<span class=\"token comment\" spellcheck=\"true\">// }</span><span class=\"line-numbers-rows\"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre><h2 id=\"Notes\">Notes</h2><p>In ES5, if the first argument to this method is not an object (a primitive), then it will cause a <a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError\" title=\"The TypeError object represents an error when a value is not of the expected type.\"><code>TypeError</code></a>. In ES2015, a non-object first argument will be coerced to an object at first.</p><pre class=\"brush: js line-numbers language-js\"><code class=\" language-js\">Object<span class=\"token punctuation\">.</span><span class=\"token function\">getOwnPropertyDescriptor</span><span class=\"token punctuation\">(</span><span class=\"token string\">'foo'</span><span class=\"token punctuation\">,</span> <span class=\"token number\">0</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token comment\" spellcheck=\"true\">// TypeError: \"foo\" is not an object // ES5 code</span>\n\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">getOwnPropertyDescriptor</span><span class=\"token punctuation\">(</span><span class=\"token string\">'foo'</span><span class=\"token punctuation\">,</span> <span class=\"token number\">0</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token comment\" spellcheck=\"true\">// Object returned by ES2015 code: {</span>\n<span class=\"token comment\" spellcheck=\"true\">// configurable: false,</span>\n<span class=\"token comment\" spellcheck=\"true\">// enumerable: true,</span>\n<span class=\"token comment\" spellcheck=\"true\">// value: \"f\",</span>\n<span class=\"token comment\" spellcheck=\"true\">// writable: false</span>\n<span class=\"token comment\" spellcheck=\"true\">// }</span><span class=\"line-numbers-rows\"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre><h2 id=\"Specifications\">Specifications</h2>"
              }
            },
            {
              title: "Object.getOwnPropertyDescriptors()",
              desc: "Returns an object containing all own property descriptors for an object.",
              "info": {
                "syntax": "Object.getOwnPropertyDescriptors(obj)",
                "parameters": "<dl>\n <dt><code>obj</code></dt>\n <dd>The object for which to get all own property descriptors.</dd>\n</dl>",
                "example": "<h3 id=\"Creating_a_shallow_clone\" class=\"highlight-spanned\"><span class=\"highlight-span\">Creating a shallow clone</span></h3><p>Whereas the <a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign\" title=\"The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.\"><code>Object.assign()</code></a> method will only copy enumerable and own properties from a source object to a target object, you are able to use this method and <a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create\" title=\"The Object.create() method creates a new object with the specified prototype object and properties.\"><code>Object.create()</code></a> for a shallow copy between two unknown objects:</p><pre class=\"brush: js line-numbers language-js\"><code class=\" language-js\">Object<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span>\n Object<span class=\"token punctuation\">.</span><span class=\"token function\">getPrototypeOf</span><span class=\"token punctuation\">(</span>obj<span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span> \n Object<span class=\"token punctuation\">.</span><span class=\"token function\">getOwnPropertyDescriptors</span><span class=\"token punctuation\">(</span>obj<span class=\"token punctuation\">)</span> \n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span><span class=\"line-numbers-rows\"><span></span><span></span><span></span><span></span></span></code></pre><h3 id=\"Creating_a_subclass\" class=\"highlight-spanned\"><span class=\"highlight-span\">Creating a subclass</span></h3><p>A typical way of creating a subclass is to define the subclass, set its prototype to an instance of the superclass, and then define properties on that instance. This can get awkward especially for getters and setters. Instead, you can use this code to set the prototype:</p>"
              }
            },
            {
              title: "Object.getOwnPropertyNames()",
              desc: "Returns an array containing the names of all of the given object's own enumerable and non-enumerable properties.",
              "info": {
                "syntax": "Object.getOwnPropertyNames(obj)",
                "parameters": "<dl>\n <dt><code>obj</code></dt>\n <dd>The object whose enumerable <em>and non-enumerable</em> own properties are to be returned.</dd>\n</dl>",
                "example": "<h3 id=\"Using_Object.getOwnPropertyNames()\" class=\"highlight-spanned\"><span class=\"highlight-span\">Using <code>Object.getOwnPropertyNames()</code></span></h3><pre class=\"brush: js line-numbers language-js\"><code class=\" language-js\"><span class=\"token keyword\">var</span> arr <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'a'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'b'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'c'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>Object<span class=\"token punctuation\">.</span><span class=\"token function\">getOwnPropertyNames</span><span class=\"token punctuation\">(</span>arr<span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">sort</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> \n<span class=\"token comment\" spellcheck=\"true\">// logs [\"0\", \"1\", \"2\", \"length\"]</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// Array-like object</span>\n<span class=\"token keyword\">var</span> obj <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> <span class=\"token number\">0</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'a'</span><span class=\"token punctuation\">,</span> <span class=\"token number\">1</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'b'</span><span class=\"token punctuation\">,</span> <span class=\"token number\">2</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'c'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>Object<span class=\"token punctuation\">.</span><span class=\"token function\">getOwnPropertyNames</span><span class=\"token punctuation\">(</span>obj<span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">sort</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> \n<span class=\"token comment\" spellcheck=\"true\">// logs [\"0\", \"1\", \"2\"]</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// Logging property names and values using Array.forEach</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">getOwnPropertyNames</span><span class=\"token punctuation\">(</span>obj<span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">forEach</span><span class=\"token punctuation\">(</span>\n <span class=\"token keyword\">function</span> <span class=\"token punctuation\">(</span>val<span class=\"token punctuation\">,</span> idx<span class=\"token punctuation\">,</span> array<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>val <span class=\"token operator\">+</span> <span class=\"token string\">' -&gt; '</span> <span class=\"token operator\">+</span> obj<span class=\"token punctuation\">[</span>val<span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token comment\" spellcheck=\"true\">// logs</span>\n<span class=\"token comment\" spellcheck=\"true\">// 0 -&gt; a</span>\n<span class=\"token comment\" spellcheck=\"true\">// 1 -&gt; b</span>\n<span class=\"token comment\" spellcheck=\"true\">// 2 -&gt; c</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// non-enumerable property</span>\n<span class=\"token keyword\">var</span> my_obj <span class=\"token operator\">=</span> Object<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n getFoo<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n value<span class=\"token punctuation\">:</span> <span class=\"token keyword\">function</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span> <span class=\"token keyword\">return</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>foo<span class=\"token punctuation\">;</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n enumerable<span class=\"token punctuation\">:</span> <span class=\"token keyword\">false</span>\n <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nmy_obj<span class=\"token punctuation\">.</span>foo <span class=\"token operator\">=</span> <span class=\"token number\">1</span><span class=\"token punctuation\">;</span>\n\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>Object<span class=\"token punctuation\">.</span><span class=\"token function\">getOwnPropertyNames</span><span class=\"token punctuation\">(</span>my_obj<span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">sort</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> \n<span class=\"token comment\" spellcheck=\"true\">// logs [\"foo\", \"getFoo\"]</span><span class=\"line-numbers-rows\"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre><p>If you want only the enumerable properties, see <a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys\" title=\"The Object.keys() method returns an array of a given object's own enumerable properties, in the same order as that provided by a for...in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well).\"><code>Object.keys()</code></a> or use a <a href=\"/en-US/docs/Web/JavaScript/Reference/Statements/for...in\" title=\"The for...in statement iterates over the enumerable properties of an object. For each distinct property, statements can be executed.\"><code>for...in</code></a> loop (although note that this will return enumerable properties not&nbsp; only found directly upon that object but also along the prototype chain for the object unless the latter is filtered with <a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty\" title=\"The hasOwnProperty() method returns a boolean indicating whether the object has the specified property as own (not inherited) property.\"><code>hasOwnProperty()</code></a>).</p><p>Items on the prototype chain are not listed:</p><pre class=\"brush: js line-numbers language-js\"><code class=\" language-js\"><span class=\"token keyword\">function</span> <span class=\"token function\">ParentClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span>\nParentClass<span class=\"token punctuation\">.</span>prototype<span class=\"token punctuation\">.</span>inheritedMethod <span class=\"token operator\">=</span> <span class=\"token keyword\">function</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">ChildClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>prop <span class=\"token operator\">=</span> <span class=\"token number\">5</span><span class=\"token punctuation\">;</span>\n <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>method <span class=\"token operator\">=</span> <span class=\"token keyword\">function</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\nChildClass<span class=\"token punctuation\">.</span>prototype <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">ParentClass</span><span class=\"token punctuation\">;</span>\nChildClass<span class=\"token punctuation\">.</span>prototype<span class=\"token punctuation\">.</span>prototypeMethod <span class=\"token operator\">=</span> <span class=\"token keyword\">function</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>\n Object<span class=\"token punctuation\">.</span><span class=\"token function\">getOwnPropertyNames</span><span class=\"token punctuation\">(</span>\n <span class=\"token keyword\">new</span> <span class=\"token class-name\">ChildClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token comment\" spellcheck=\"true\">// [\"prop\", \"method\"]</span>\n <span class=\"token punctuation\">)</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span><span class=\"line-numbers-rows\"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre>"
              }
            },
            {
              title: "Object.getOwnPropertySymbols()",
              desc: "Returns an array of all symbol properties found directly upon a given object.",
              "info": {
                "syntax": "Object.getOwnPropertySymbols(obj)",
                "parameters": "<dl>\n <dt><code>obj</code></dt>\n <dd>The object whose symbol properties are to be returned.</dd>\n</dl>",
                "example": "<pre class=\"brush: js line-numbers language-js\"><code class=\" language-js\"><span class=\"token keyword\">var</span> obj <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">var</span> a <span class=\"token operator\">=</span> <span class=\"token function\">Symbol</span><span class=\"token punctuation\">(</span><span class=\"token string\">'a'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">var</span> b <span class=\"token operator\">=</span> Symbol<span class=\"token punctuation\">.</span><span class=\"token keyword\">for</span><span class=\"token punctuation\">(</span><span class=\"token string\">'b'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nobj<span class=\"token punctuation\">[</span>a<span class=\"token punctuation\">]</span> <span class=\"token operator\">=</span> <span class=\"token string\">'localSymbol'</span><span class=\"token punctuation\">;</span>\nobj<span class=\"token punctuation\">[</span>b<span class=\"token punctuation\">]</span> <span class=\"token operator\">=</span> <span class=\"token string\">'globalSymbol'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">var</span> objectSymbols <span class=\"token operator\">=</span> Object<span class=\"token punctuation\">.</span><span class=\"token function\">getOwnPropertySymbols</span><span class=\"token punctuation\">(</span>obj<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>objectSymbols<span class=\"token punctuation\">.</span>length<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// 2</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>objectSymbols<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// [Symbol(a), Symbol(b)]</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>objectSymbols<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// Symbol(a)</span><span class=\"line-numbers-rows\"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre><h2 id=\"Specifications\">Specifications</h2><table class=\"standard-table\">\n <tbody>\n <tr>\n <th scope=\"col\">Specification</th>\n <th scope=\"col\">Status</th>\n <th scope=\"col\">Comment</th>\n </tr>\n <tr>\n <td><a href=\"http://www.ecma-international.org/ecma-262/6.0/#sec-object.getownpropertysymbols\" hreflang=\"en\" lang=\"en\" class=\"external external-icon\" rel=\"noopener\">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang=\"en-US\">The definition of 'Object.getOwnPropertySymbols' in that specification.</small></a></td>\n <td><span class=\"spec-Standard\">Standard</span></td>\n <td>Initial definition.</td>\n </tr>\n <tr>\n <td><a href=\"https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols\" hreflang=\"en\" lang=\"en\" class=\"external external-icon\" rel=\"noopener\">ECMAScript Latest Draft (ECMA-262)<br><small lang=\"en-US\">The definition of 'Object.getOwnPropertySymbols' in that specification.</small></a></td>\n <td><span class=\"spec-Living\">Living Standard</span></td>\n <td>&nbsp;</td>\n </tr>\n </tbody>\n</table><h2 id=\"Browser_compatibility\">Browser compatibility</h2><div>\n<div class=\"hidden\">The compatibility table on this page is generated from structured data. If you'd like to contribute to the data, please check out <a href=\"https://github.com/mdn/browser-compat-data\" class=\"external external-icon\" rel=\"noopener\">https://github.com/mdn/browser-compat-data</a> and send us a pull request.</div>\n\n<p></p><div class=\"bc-old\"><div class=\"htab\">\n <a id=\"AutoCompatibilityTable\" name=\"AutoCompatibilityTable\"></a>\n <ul>\n <li class=\"selected\">\n <a>Desktop</a>\n </li>\n <li>\n <a>Mobile</a>\n </li>\n </ul>\n <div id=\"compat-desktop\" style=\"display: block;\"><table class=\"compat-table\"><thead><tr><th>Feature</th><th>Chrome</th><th>Edge</th><th>Firefox</th><th>Internet Explorer</th><th>Opera</th><th>Safari</th></tr></thead><tbody><tr><td><a href=\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols\">Basic support</a></td><td class=\"full-support\">38</td><td class=\"full-support\"><span title=\"Please update this with the earliest version of support.\">\n Yes</span></td><td class=\"full-support\">36</td><td class=\"no-support\"><span title=\"No support\">\n No</span></td><td class=\"full-support\">25</td><td class=\"full-support\">9</td></tr></tbody></table></div><div id=\"compat-mobile\" style=\"display: none;\"><table class=\"compat-table\"><thead><tr><th>Feature</th><th>Android webview</th><th>Chrome for Android</th><th>Edge mobile</th><th>Firefox for Android</th><th>IE mobile</th><th>Opera Android</th><th>iOS Safari</th></tr></thead><tbody><tr><td><a href=\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols\">Basic support</a></td><td class=\"full-support\">5.1</td><td class=\"full-support\">38</td><td class=\"full-support\"><span title=\"Please update this with the earliest version of support.\">\n Yes</span></td><td class=\"full-support\">36</td><td class=\"no-support\"><span title=\"No support\">\n No</span></td><td class=\"full-support\">25</td><td class=\"full-support\">9</td></tr></tbody></table></div></div></div><div class=\"bc-data hidden\"><table class=\"bc-table bc-table-js\"><thead><tr class=\"bc-platforms\"><td></td><th colspan=\"6\" class=\"bc-platform-desktop\"><abbr class=\"only-icon\" title=\"Desktop\"><span>Desktop</span><i class=\"ic-desktop\"></i></abbr></th><th colspan=\"7\" class=\"bc-platform-mobile\"><abbr class=\"only-icon\" title=\"Mobile\"><span>Mobile</span><i class=\"ic-mobile\"></i></abbr></th><th colspan=\"1\" class=\"bc-platform-server\"><abbr class=\"only-icon\" title=\"Server\"><span>Server</span><i class=\"ic-server\"></i></abbr></th></tr><tr class=\"bc-browsers\"><td></td><th class=\"bc-browser-chrome\"><abbr class=\"only-icon\" title=\"Chrome\"><span>Chrome</span><i class=\"ic-chrome\"></i></abbr></th><th class=\"bc-browser-edge\"><abbr class=\"only-icon\" title=\"Edge\"><span>Edge</span><i class=\"ic-edge\"></i></abbr></th><th class=\"bc-browser-firefox\"><abbr class=\"only-icon\" title=\"Firefox\"><span>Firefox</span><i class=\"ic-firefox\"></i></abbr></th><th class=\"bc-browser-ie\"><abbr class=\"only-icon\" title=\"Internet Explorer\"><span>Internet Explorer</span><i class=\"ic-ie\"></i></abbr></th><th class=\"bc-browser-opera\"><abbr class=\"only-icon\" title=\"Opera\"><span>Opera</span><i class=\"ic-opera\"></i></abbr></th><th class=\"bc-browser-safari\"><abbr class=\"only-icon\" title=\"Safari\"><span>Safari</span><i class=\"ic-safari\"></i></abbr></th><th class=\"bc-browser-webview_android\"><abbr class=\"only-icon\" title=\"Android webview\"><span>Android webview</span><i class=\"ic-webview_android\"></i></abbr></th><th class=\"bc-browser-chrome_android\"><abbr class=\"only-icon\" title=\"Chrome for Android\"><span>Chrome for Android</span><i class=\"ic-chrome_android\"></i></abbr></th><th class=\"bc-browser-edge_mobile\"><abbr class=\"only-icon\" title=\"Edge Mobile\"><span>Edge Mobile</span><i class=\"ic-edge_mobile\"></i></abbr></th><th class=\"bc-browser-firefox_android\"><abbr class=\"only-icon\" title=\"Firefox for Android\"><span>Firefox for Android</span><i class=\"ic-firefox_android\"></i></abbr></th><th class=\"bc-browser-ie_mobile\"><abbr class=\"only-icon\" title=\"IE mobile\"><span>IE mobile</span><i class=\"ic-ie_mobile\"></i></abbr></th><th class=\"bc-browser-opera_android\"><abbr class=\"only-icon\" title=\"Opera for Android\"><span>Opera for Android</span><i class=\"ic-opera_android\"></i></abbr></th><th class=\"bc-browser-safari_ios\"><abbr class=\"only-icon\" title=\"iOS Safari\"><span>iOS Safari</span><i class=\"ic-safari_ios\"></i></abbr></th><th class=\"bc-browser-nodejs\"><abbr class=\"only-icon\" title=\"Node.js\"><span>Node.js</span><i class=\"ic-nodejs\"></i></abbr></th></tr></thead><tbody><tr><th scope=\"row\">Basic support</th><td class=\"bc-supports-yes bc-browser-chrome\"><abbr class=\"bc-level-yes only-icon\" title=\"Full support\">\n <span>Full support</span>\n </abbr>\n 38</td><td class=\"bc-supports-yes bc-browser-edge\"><abbr class=\"bc-level-yes only-icon\" title=\"Full support\">\n <span>Full support</span>\n </abbr>\n Yes</td><td class=\"bc-supports-yes bc-browser-firefox\"><abbr class=\"bc-level-yes only-icon\" title=\"Full support\">\n <span>Full support</span>\n </abbr>\n 36</td><td class=\"bc-supports-no bc-browser-ie\"><abbr class=\"bc-level-no only-icon\" title=\"No support\">\n <span>No support</span>\n </abbr>\n No</td><td class=\"bc-supports-yes bc-browser-opera\"><abbr class=\"bc-level-yes only-icon\" title=\"Full support\">\n <span>Full support</span>\n </abbr>\n 25</td><td class=\"bc-supports-yes bc-browser-safari\"><abbr class=\"bc-level-yes only-icon\" title=\"Full support\">\n <span>Full support</span>\n </abbr>\n 9</td><td class=\"bc-supports-yes bc-browser-webview_android\"><abbr class=\"bc-level-yes only-icon\" title=\"Full support\">\n <span>Full support</span>\n </abbr>\n 5.1</td><td class=\"bc-supports-yes bc-browser-chrome_android\"><abbr class=\"bc-level-yes only-icon\" title=\"Full support\">\n <span>Full support</span>\n </abbr>\n 38</td><td class=\"bc-supports-yes bc-browser-edge_mobile\"><abbr class=\"bc-level-yes only-icon\" title=\"Full support\">\n <span>Full support</span>\n </abbr>\n Yes</td><td class=\"bc-supports-yes bc-browser-firefox_android\"><abbr class=\"bc-level-yes only-icon\" title=\"Full support\">\n <span>Full support</span>\n </abbr>\n 36</td><td class=\"bc-supports-no bc-browser-ie_mobile\"><abbr class=\"bc-level-no only-icon\" title=\"No support\">\n <span>No support</span>\n </abbr>\n No</td><td class=\"bc-supports-yes bc-browser-opera_android\"><abbr class=\"bc-level-yes only-icon\" title=\"Full support\">\n <span>Full support</span>\n </abbr>\n 25</td><td class=\"bc-supports-yes bc-browser-safari_ios\"><abbr class=\"bc-level-yes only-icon\" title=\"Full support\">\n <span>Full support</span>\n </abbr>\n 9</td><td class=\"bc-supports-yes bc-browser-nodejs\"><abbr class=\"bc-level-yes only-icon\" title=\"Full support\">\n <span>Full support</span>\n </abbr>\n Yes</td></tr></tbody></table></div><p></p>\n</div>"
              },
            },
            {
              title: "Object.getPrototypeOf()",
              desc: "Returns the prototype of the specified object.",
              "info": {
                "syntax": "Object.getPrototypeOf(obj)",
                "parameters": "<dl>\n <dt><code>obj</code></dt>\n <dd>The object whose prototype is to be returned.</dd>\n</dl>",
                "example": "<pre class=\"brush: js line-numbers language-js\"><code class=\" language-js\"><span class=\"token keyword\">var</span> proto <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">var</span> obj <span class=\"token operator\">=</span> Object<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span>proto<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">getPrototypeOf</span><span class=\"token punctuation\">(</span>obj<span class=\"token punctuation\">)</span> <span class=\"token operator\">===</span> proto<span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// true</span><span class=\"line-numbers-rows\"><span></span><span></span><span></span></span></code></pre><h2 id=\"Notes\">Notes</h2><p>In ES5, it will throw a <a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError\" title=\"The TypeError object represents an error when a value is not of the expected type.\"><code>TypeError</code></a> exception if the <code>obj</code> parameter isn't an object. In ES2015, the parameter will be coerced to an <a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\" title=\"The Object constructor creates an object wrapper.\"><code>Object</code></a>.</p><pre class=\"brush: js line-numbers language-js\"><code class=\" language-js\">Object<span class=\"token punctuation\">.</span><span class=\"token function\">getPrototypeOf</span><span class=\"token punctuation\">(</span><span class=\"token string\">'foo'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token comment\" spellcheck=\"true\">// TypeError: \"foo\" is not an object (ES5 code)</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">getPrototypeOf</span><span class=\"token punctuation\">(</span><span class=\"token string\">'foo'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token comment\" spellcheck=\"true\">// String.prototype (ES2015 code)</span><span class=\"line-numbers-rows\"><span></span><span></span><span></span><span></span></span></code></pre><h2 id=\"Specifications\">Specifications</h2>"
              }
            },
            {
              title: "Object.is()",
              desc: "Compares if two values are the same value. Equates all NaN values (which differs from both Abstract Equality Comparison and Strict Equality Comparison).",
              "info": {
                "syntax": "Object.is(value1, value2);",
                "parameters": "<dl>\n <dt><code>value1</code></dt>\n <dd>The first value to compare.</dd>\n <dt><code>value2</code></dt>\n <dd>The second value to compare.</dd>\n</dl>",
                "example": "<pre class=\"brush: js line-numbers language-js\"><code class=\" language-js\">Object<span class=\"token punctuation\">.</span><span class=\"token function\">is</span><span class=\"token punctuation\">(</span><span class=\"token string\">'foo'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'foo'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// true</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">is</span><span class=\"token punctuation\">(</span>window<span class=\"token punctuation\">,</span> window<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// true</span>\n\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">is</span><span class=\"token punctuation\">(</span><span class=\"token string\">'foo'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'bar'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// false</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">is</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// false</span>\n\n<span class=\"token keyword\">var</span> test <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> a<span class=\"token punctuation\">:</span> <span class=\"token number\">1</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">is</span><span class=\"token punctuation\">(</span>test<span class=\"token punctuation\">,</span> test<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// true</span>\n\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">is</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">null</span><span class=\"token punctuation\">,</span> <span class=\"token keyword\">null</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// true</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// Special Cases</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">is</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token operator\">-</span><span class=\"token number\">0</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// false</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">is</span><span class=\"token punctuation\">(</span><span class=\"token operator\">-</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token operator\">-</span><span class=\"token number\">0</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// true</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">is</span><span class=\"token punctuation\">(</span><span class=\"token number\">NaN</span><span class=\"token punctuation\">,</span> <span class=\"token number\">0</span><span class=\"token operator\">/</span><span class=\"token number\">0</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// true</span><span class=\"line-numbers-rows\"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre><h2 id=\"Polyfill\">Polyfill</h2><pre class=\"brush: js line-numbers language-js\"><code class=\" language-js\"><span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span>Object<span class=\"token punctuation\">.</span>is<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n Object<span class=\"token punctuation\">.</span>is <span class=\"token operator\">=</span> <span class=\"token keyword\">function</span><span class=\"token punctuation\">(</span>x<span class=\"token punctuation\">,</span> y<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n <span class=\"token comment\" spellcheck=\"true\">// SameValue algorithm</span>\n <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>x <span class=\"token operator\">===</span> y<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span> <span class=\"token comment\" spellcheck=\"true\">// Steps 1-5, 7-10</span>\n <span class=\"token comment\" spellcheck=\"true\">// Steps 6.b-6.e: +0 != -0</span>\n <span class=\"token keyword\">return</span> x <span class=\"token operator\">!==</span> <span class=\"token number\">0</span> <span class=\"token operator\">||</span> <span class=\"token number\">1</span> <span class=\"token operator\">/</span> x <span class=\"token operator\">===</span> <span class=\"token number\">1</span> <span class=\"token operator\">/</span> y<span class=\"token punctuation\">;</span>\n <span class=\"token punctuation\">}</span> <span class=\"token keyword\">else</span> <span class=\"token punctuation\">{</span>\n <span class=\"token comment\" spellcheck=\"true\">// Step 6.a: NaN == NaN</span>\n <span class=\"token keyword\">return</span> x <span class=\"token operator\">!==</span> x <span class=\"token operator\">&amp;&amp;</span> y <span class=\"token operator\">!==</span> y<span class=\"token punctuation\">;</span>\n <span class=\"token punctuation\">}</span>\n <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"line-numbers-rows\"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre><h2 id=\"Specifications\">Specifications</h2><table class=\"standard-table\">\n <tbody>\n <tr>\n <th scope=\"col\">Specification</th>\n <th scope=\"col\">Status</th>\n <th scope=\"col\">Comment</th>\n </tr>\n <tr>\n <td><a href=\"http://www.ecma-international.org/ecma-262/6.0/#sec-object.is\" hreflang=\"en\" lang=\"en\" class=\"external external-icon\" rel=\"noopener\">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang=\"en-US\">The definition of 'Object.is' in that specification.</small></a></td>\n <td><span class=\"spec-Standard\">Standard</span></td>\n <td>Initial definition.</td>\n </tr>\n <tr>\n <td><a href=\"https://tc39.github.io/ecma262/#sec-object.is\" hreflang=\"en\" lang=\"en\" class=\"external external-icon\" rel=\"noopener\">ECMAScript Latest Draft (ECMA-262)<br><small lang=\"en-US\">The definition of 'Object.is' in that specification.</small></a></td>\n <td><span class=\"spec-Living\">Living Standard</span></td>\n <td>&nbsp;</td>\n </tr>\n </tbody>\n</table>"
              }
            },
            {
              title: "Object.isExtensible()",
              desc: "Determines if extending of an object is allowed.",
              "info": {
                "syntax": "Object.isExtensible(obj)",
                "parameters": "<dl>\n <dt><code>obj</code></dt>\n <dd>The object which should be checked.</dd>\n</dl>",
                "example": "<pre class=\"brush: js line-numbers language-js\"><code class=\" language-js\"><span class=\"token comment\" spellcheck=\"true\">// New objects are extensible.</span>\n<span class=\"token keyword\">var</span> empty <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">isExtensible</span><span class=\"token punctuation\">(</span>empty<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// === true</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// ...but that can be changed.</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">preventExtensions</span><span class=\"token punctuation\">(</span>empty<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">isExtensible</span><span class=\"token punctuation\">(</span>empty<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// === false</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// Sealed objects are by definition non-extensible.</span>\n<span class=\"token keyword\">var</span> sealed <span class=\"token operator\">=</span> Object<span class=\"token punctuation\">.</span><span class=\"token function\">seal</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">isExtensible</span><span class=\"token punctuation\">(</span>sealed<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// === false</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// Frozen objects are also by definition non-extensible.</span>\n<span class=\"token keyword\">var</span> frozen <span class=\"token operator\">=</span> Object<span class=\"token punctuation\">.</span><span class=\"token function\">freeze</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">isExtensible</span><span class=\"token punctuation\">(</span>frozen<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// === false</span><span class=\"line-numbers-rows\"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre><h2 id=\"Notes\">Notes</h2><p>In ES5, if the argument to this method is not an object (a primitive), then it will cause a <a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError\" title=\"The TypeError object represents an error when a value is not of the expected type.\"><code>TypeError</code></a>. In ES2015, a non-object argument will be treated as if it was a non-extensible ordinary object, simply return <code>false</code>.</p><pre class=\"brush: js line-numbers language-js\"><code class=\" language-js\">Object<span class=\"token punctuation\">.</span><span class=\"token function\">isExtensible</span><span class=\"token punctuation\">(</span><span class=\"token number\">1</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token comment\" spellcheck=\"true\">// TypeError: 1 is not an object (ES5 code)</span>\n\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">isExtensible</span><span class=\"token punctuation\">(</span><span class=\"token number\">1</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token comment\" spellcheck=\"true\">// false (ES2015 code)</span><span class=\"line-numbers-rows\"><span></span><span></span><span></span><span></span><span></span></span></code></pre><h2 id=\"Specifications\">Specifications</h2>"
              }
            },
            {
              title: "Object.isFrozen()",
              desc: "Determines if an object was frozen",
              "info": {
                "syntax": "Object.isFrozen(obj)",
                "parameters": "<dl><dt><code>obj</code></dt>\n <dd>The object which should be checked.</dd>\n</dl>",
                "example": "<pre class=\"brush: js line-numbers language-js\"><code class=\" language-js\"><span class=\"token comment\" spellcheck=\"true\">// A new object is extensible, so it is not frozen.</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">isFrozen</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// === false</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// An empty object which is not extensible</span>\n<span class=\"token comment\" spellcheck=\"true\">// is vacuously frozen.</span>\n<span class=\"token keyword\">var</span> vacuouslyFrozen <span class=\"token operator\">=</span> Object<span class=\"token punctuation\">.</span><span class=\"token function\">preventExtensions</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">isFrozen</span><span class=\"token punctuation\">(</span>vacuouslyFrozen<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// === true</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// A new object with one property is also extensible,</span>\n<span class=\"token comment\" spellcheck=\"true\">// ergo not frozen.</span>\n<span class=\"token keyword\">var</span> oneProp <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> p<span class=\"token punctuation\">:</span> <span class=\"token number\">42</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">isFrozen</span><span class=\"token punctuation\">(</span>oneProp<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// === false</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// Preventing extensions to the object still doesn't </span>\n<span class=\"token comment\" spellcheck=\"true\">// make it frozen, because the property is still </span>\n<span class=\"token comment\" spellcheck=\"true\">// configurable (and writable).</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">preventExtensions</span><span class=\"token punctuation\">(</span>oneProp<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">isFrozen</span><span class=\"token punctuation\">(</span>oneProp<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// === false</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// ...but then deleting that property makes the object</span>\n<span class=\"token comment\" spellcheck=\"true\">// vacuously frozen.</span>\n<span class=\"token keyword\">delete</span> oneProp<span class=\"token punctuation\">.</span>p<span class=\"token punctuation\">;</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">isFrozen</span><span class=\"token punctuation\">(</span>oneProp<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// === true</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// A non-extensible object with a non-writable</span>\n<span class=\"token comment\" spellcheck=\"true\">// but still configurable property is not frozen.</span>\n<span class=\"token keyword\">var</span> nonWritable <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> e<span class=\"token punctuation\">:</span> <span class=\"token string\">'plep'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">preventExtensions</span><span class=\"token punctuation\">(</span>nonWritable<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">defineProperty</span><span class=\"token punctuation\">(</span>nonWritable<span class=\"token punctuation\">,</span> <span class=\"token string\">'e'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n writable<span class=\"token punctuation\">:</span> <span class=\"token keyword\">false</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// make non-writable</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">isFrozen</span><span class=\"token punctuation\">(</span>nonWritable<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// === false</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// Changing that property to non-configurable</span>\n<span class=\"token comment\" spellcheck=\"true\">// then makes the object frozen.</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">defineProperty</span><span class=\"token punctuation\">(</span>nonWritable<span class=\"token punctuation\">,</span> <span class=\"token string\">'e'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n configurable<span class=\"token punctuation\">:</span> <span class=\"token keyword\">false</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// make non-configurable</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">isFrozen</span><span class=\"token punctuation\">(</span>nonWritable<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// === true</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// A non-extensible object with a non-configurable</span>\n<span class=\"token comment\" spellcheck=\"true\">// but still writable property also isn't frozen.</span>\n<span class=\"token keyword\">var</span> nonConfigurable <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> release<span class=\"token punctuation\">:</span> <span class=\"token string\">'the kraken!'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">preventExtensions</span><span class=\"token punctuation\">(</span>nonConfigurable<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">defineProperty</span><span class=\"token punctuation\">(</span>nonConfigurable<span class=\"token punctuation\">,</span> <span class=\"token string\">'release'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n configurable<span class=\"token punctuation\">:</span> <span class=\"token keyword\">false</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">isFrozen</span><span class=\"token punctuation\">(</span>nonConfigurable<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// === false</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// Changing that property to non-writable</span>\n<span class=\"token comment\" spellcheck=\"true\">// then makes the object frozen.</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">defineProperty</span><span class=\"token punctuation\">(</span>nonConfigurable<span class=\"token punctuation\">,</span> <span class=\"token string\">'release'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n writable<span class=\"token punctuation\">:</span> <span class=\"token keyword\">false</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">isFrozen</span><span class=\"token punctuation\">(</span>nonConfigurable<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// === true</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// A non-extensible object with a configurable</span>\n<span class=\"token comment\" spellcheck=\"true\">// accessor property isn't frozen.</span>\n<span class=\"token keyword\">var</span> accessor <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> <span class=\"token keyword\">get</span> <span class=\"token function\">food</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span> <span class=\"token keyword\">return</span> <span class=\"token string\">'yum'</span><span class=\"token punctuation\">;</span> <span class=\"token punctuation\">}</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">preventExtensions</span><span class=\"token punctuation\">(</span>accessor<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">isFrozen</span><span class=\"token punctuation\">(</span>accessor<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// === false</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// ...but make that property non-configurable</span>\n<span class=\"token comment\" spellcheck=\"true\">// and it becomes frozen.</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">defineProperty</span><span class=\"token punctuation\">(</span>accessor<span class=\"token punctuation\">,</span> <span class=\"token string\">'food'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n configurable<span class=\"token punctuation\">:</span> <span class=\"token keyword\">false</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">isFrozen</span><span class=\"token punctuation\">(</span>accessor<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// === true</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// But the easiest way for an object to be frozen</span>\n<span class=\"token comment\" spellcheck=\"true\">// is if Object.freeze has been called on it.</span>\n<span class=\"token keyword\">var</span> frozen <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> <span class=\"token number\">1</span><span class=\"token punctuation\">:</span> <span class=\"token number\">81</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">isFrozen</span><span class=\"token punctuation\">(</span>frozen<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// === false</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">freeze</span><span class=\"token punctuation\">(</span>frozen<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">isFrozen</span><span class=\"token punctuation\">(</span>frozen<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// === true</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// By definition, a frozen object is non-extensible.</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">isExtensible</span><span class=\"token punctuation\">(</span>frozen<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// === false</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// Also by definition, a frozen object is sealed.</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">isSealed</span><span class=\"token punctuation\">(</span>frozen<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// === true</span><span class=\"line-numbers-rows\"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre><h2 id=\"Notes\">Notes</h2><p>In ES5, if the argument to this method is not an object (a primitive), then it will cause a <a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError\" title=\"The TypeError object represents an error when a value is not of the expected type.\"><code>TypeError</code></a>. In ES2015, a non-object argument will be treated as if it was a frozen ordinary object, simply return <code>true</code>.</p><pre class=\"brush: js line-numbers language-js\"><code class=\" language-js\">Object<span class=\"token punctuation\">.</span><span class=\"token function\">isFrozen</span><span class=\"token punctuation\">(</span><span class=\"token number\">1</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token comment\" spellcheck=\"true\">// TypeError: 1 is not an object (ES5 code)</span>\n\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">isFrozen</span><span class=\"token punctuation\">(</span><span class=\"token number\">1</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token comment\" spellcheck=\"true\">// true (ES2015 code)</span><span class=\"line-numbers-rows\"><span></span><span></span><span></span><span></span><span></span></span></code></pre><h2 id=\"Specifications\">Specifications</h2>"
              },
            },
            {
              title: "Object.isSealed()",
              desc: "Determines if an object is sealed.",
              "info": {
                "syntax": "Object.isSealed(obj)",
                "parameters": "<dl>\n <dt><code>obj</code></dt>\n <dd>The object which should be checked.</dd>\n</dl>",
                "example": "<pre class=\"brush: js line-numbers language-js\"><code class=\" language-js\"><span class=\"token comment\" spellcheck=\"true\">// Objects aren't sealed by default.</span>\n<span class=\"token keyword\">var</span> empty <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">isSealed</span><span class=\"token punctuation\">(</span>empty<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// === false</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// If you make an empty object non-extensible,</span>\n<span class=\"token comment\" spellcheck=\"true\">// it is vacuously sealed.</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">preventExtensions</span><span class=\"token punctuation\">(</span>empty<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">isSealed</span><span class=\"token punctuation\">(</span>empty<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// === true</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// The same is not true of a non-empty object,</span>\n<span class=\"token comment\" spellcheck=\"true\">// unless its properties are all non-configurable.</span>\n<span class=\"token keyword\">var</span> hasProp <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> fee<span class=\"token punctuation\">:</span> <span class=\"token string\">'fie foe fum'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">preventExtensions</span><span class=\"token punctuation\">(</span>hasProp<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">isSealed</span><span class=\"token punctuation\">(</span>hasProp<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// === false</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// But make them all non-configurable</span>\n<span class=\"token comment\" spellcheck=\"true\">// and the object becomes sealed.</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">defineProperty</span><span class=\"token punctuation\">(</span>hasProp<span class=\"token punctuation\">,</span> <span class=\"token string\">'fee'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n configurable<span class=\"token punctuation\">:</span> <span class=\"token keyword\">false</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">isSealed</span><span class=\"token punctuation\">(</span>hasProp<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// === true</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// The easiest way to seal an object, of course,</span>\n<span class=\"token comment\" spellcheck=\"true\">// is Object.seal.</span>\n<span class=\"token keyword\">var</span> sealed <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">seal</span><span class=\"token punctuation\">(</span>sealed<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">isSealed</span><span class=\"token punctuation\">(</span>sealed<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// === true</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// A sealed object is, by definition, non-extensible.</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">isExtensible</span><span class=\"token punctuation\">(</span>sealed<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// === false</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// A sealed object might be frozen,</span>\n<span class=\"token comment\" spellcheck=\"true\">// but it doesn't have to be.</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">isFrozen</span><span class=\"token punctuation\">(</span>sealed<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// === true </span>\n<span class=\"token comment\" spellcheck=\"true\">// (all properties also non-writable)</span>\n\n<span class=\"token keyword\">var</span> s2 <span class=\"token operator\">=</span> Object<span class=\"token punctuation\">.</span><span class=\"token function\">seal</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> p<span class=\"token punctuation\">:</span> <span class=\"token number\">3</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">isFrozen</span><span class=\"token punctuation\">(</span>s2<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// === false </span>\n<span class=\"token comment\" spellcheck=\"true\">// ('p' is still writable)</span>\n\n<span class=\"token keyword\">var</span> s3 <span class=\"token operator\">=</span> Object<span class=\"token punctuation\">.</span><span class=\"token function\">seal</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> <span class=\"token keyword\">get</span> <span class=\"token function\">p</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span> <span class=\"token keyword\">return</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span> <span class=\"token punctuation\">}</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">isFrozen</span><span class=\"token punctuation\">(</span>s3<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// === true</span>\n<span class=\"token comment\" spellcheck=\"true\">// (only configurability matters for accessor properties)</span><span class=\"line-numbers-rows\"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre><h2 id=\"Notes\">Notes</h2><p>In ES5, if the argument to this method is not an object (a primitive), then it will cause a <a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError\" title=\"The TypeError object represents an error when a value is not of the expected type.\"><code>TypeError</code></a>. In ES2015, a non-object argument will be treated as if it was a sealed ordinary object, simply return <code>true</code>.</p><pre class=\"brush: js line-numbers language-js\"><code class=\" language-js\">Object<span class=\"token punctuation\">.</span><span class=\"token function\">isSealed</span><span class=\"token punctuation\">(</span><span class=\"token number\">1</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token comment\" spellcheck=\"true\">// TypeError: 1 is not an object (ES5 code)</span>\n\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">isSealed</span><span class=\"token punctuation\">(</span><span class=\"token number\">1</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token comment\" spellcheck=\"true\">// true (ES2015 code)</span><span class=\"line-numbers-rows\"><span></span><span></span><span></span><span></span><span></span></span></code></pre><h2 id=\"Specifications\">Specifications</h2>"
              }
            },
            {
              title: "Object.keys()",
              desc: "Returns an array containing the names of all of the given object's own enumerable properties.",
              "info": {
                "syntax": "Object.keys(obj)",
                "parameters": "<dl>\n <dt><code>obj</code></dt>\n <dd>The object of which the enumerable own properties are to be returned.</dd>\n</dl>",
                "example": "<pre class=\"brush: js line-numbers language-js\"><code class=\" language-js\"><span class=\"token keyword\">var</span> arr <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'a'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'b'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'c'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>Object<span class=\"token punctuation\">.</span><span class=\"token function\">keys</span><span class=\"token punctuation\">(</span>arr<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// console: ['0', '1', '2']</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// array like object</span>\n<span class=\"token keyword\">var</span> obj <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> <span class=\"token number\">0</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'a'</span><span class=\"token punctuation\">,</span> <span class=\"token number\">1</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'b'</span><span class=\"token punctuation\">,</span> <span class=\"token number\">2</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'c'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>Object<span class=\"token punctuation\">.</span><span class=\"token function\">keys</span><span class=\"token punctuation\">(</span>obj<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// console: ['0', '1', '2']</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// array like object with random key ordering</span>\n<span class=\"token keyword\">var</span> anObj <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> <span class=\"token number\">100</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'a'</span><span class=\"token punctuation\">,</span> <span class=\"token number\">2</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'b'</span><span class=\"token punctuation\">,</span> <span class=\"token number\">7</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'c'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>Object<span class=\"token punctuation\">.</span><span class=\"token function\">keys</span><span class=\"token punctuation\">(</span>anObj<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// ['2', '7', '100']</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// getFoo is property which isn't enumerable</span>\n<span class=\"token keyword\">var</span> myObj <span class=\"token operator\">=</span> Object<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n getFoo<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n value<span class=\"token punctuation\">:</span> <span class=\"token keyword\">function</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span> <span class=\"token keyword\">return</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>foo<span class=\"token punctuation\">;</span> <span class=\"token punctuation\">}</span>\n <span class=\"token punctuation\">}</span> \n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nmyObj<span class=\"token punctuation\">.</span>foo <span class=\"token operator\">=</span> <span class=\"token number\">1</span><span class=\"token punctuation\">;</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>Object<span class=\"token punctuation\">.</span><span class=\"token function\">keys</span><span class=\"token punctuation\">(</span>myObj<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// console: ['foo']</span><span class=\"line-numbers-rows\"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre><p>If you want all properties, even non-enumerables, see <a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames\" title=\"The Object.getOwnPropertyNames() method returns an array of all properties (including non-enumerable properties except properties that using Symbol) found directly upon a given object.\"><code>Object.getOwnPropertyNames()</code></a>.</p><h2 id=\"Notes\">Notes</h2><p>In ES5, if the argument to this method is not an object (a primitive), then it will cause a <a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError\" title=\"The TypeError object represents an error when a value is not of the expected type.\"><code>TypeError</code></a>. In ES2015, a non-object argument will be coerced to an object.</p><pre class=\"brush: js line-numbers language-js\"><code class=\" language-js\">Object<span class=\"token punctuation\">.</span><span class=\"token function\">keys</span><span class=\"token punctuation\">(</span><span class=\"token string\">'foo'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token comment\" spellcheck=\"true\">// TypeError: \"foo\" is not an object (ES5 code)</span>\n\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">keys</span><span class=\"token punctuation\">(</span><span class=\"token string\">'foo'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token comment\" spellcheck=\"true\">// [\"0\", \"1\", \"2\"] (ES2015 code)</span><span class=\"line-numbers-rows\"><span></span><span></span><span></span><span></span><span></span></span></code></pre>"
              }
            },
            {
              title: "Object.preventExtensions()",
              desc: "Prevents any extensions of an object.",
              "info": {
                "syntax": "Object.preventExtensions(obj)",
                "parameters": "<dl>\n <dt><code>obj</code></dt>\n <dd>The object which should be made non-extensible.</dd>\n</dl>",
                "example": "<pre class=\"brush: js line-numbers language-js\"><code class=\" language-js\"><span class=\"token comment\" spellcheck=\"true\">// Object.preventExtensions returns the object</span>\n<span class=\"token comment\" spellcheck=\"true\">// being made non-extensible.</span>\n<span class=\"token keyword\">var</span> obj <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">var</span> obj2 <span class=\"token operator\">=</span> Object<span class=\"token punctuation\">.</span><span class=\"token function\">preventExtensions</span><span class=\"token punctuation\">(</span>obj<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nobj <span class=\"token operator\">===</span> obj2<span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// true</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// Objects are extensible by default.</span>\n<span class=\"token keyword\">var</span> empty <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">isExtensible</span><span class=\"token punctuation\">(</span>empty<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// === true</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// ...but that can be changed.</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">preventExtensions</span><span class=\"token punctuation\">(</span>empty<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">isExtensible</span><span class=\"token punctuation\">(</span>empty<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// === false</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// Object.defineProperty throws when adding</span>\n<span class=\"token comment\" spellcheck=\"true\">// a new property to a non-extensible object.</span>\n<span class=\"token keyword\">var</span> nonExtensible <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> removable<span class=\"token punctuation\">:</span> <span class=\"token keyword\">true</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">preventExtensions</span><span class=\"token punctuation\">(</span>nonExtensible<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">defineProperty</span><span class=\"token punctuation\">(</span>nonExtensible<span class=\"token punctuation\">,</span> <span class=\"token string\">'new'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n value<span class=\"token punctuation\">:</span> <span class=\"token number\">8675309</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// throws a TypeError</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// In strict mode, attempting to add new properties</span>\n<span class=\"token comment\" spellcheck=\"true\">// to a non-extensible object throws a TypeError.</span>\n<span class=\"token keyword\">function</span> <span class=\"token function\">fail</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n <span class=\"token string\">'use strict'</span><span class=\"token punctuation\">;</span>\n <span class=\"token comment\" spellcheck=\"true\">// throws a TypeError</span>\n nonExtensible<span class=\"token punctuation\">.</span>newProperty <span class=\"token operator\">=</span> <span class=\"token string\">'FAIL'</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token function\">fail</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// EXTENSION (only works in engines supporting __proto__</span>\n<span class=\"token comment\" spellcheck=\"true\">// (which is deprecated. Use Object.getPrototypeOf</span>\n<span class=\"token comment\" spellcheck=\"true\">// instead)): A non-extensible object's</span>\n<span class=\"token comment\" spellcheck=\"true\">// prototype is immutable.</span>\n<span class=\"token keyword\">var</span> fixed <span class=\"token operator\">=</span> Object<span class=\"token punctuation\">.</span><span class=\"token function\">preventExtensions</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nfixed<span class=\"token punctuation\">.</span>__proto__ <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> oh<span class=\"token punctuation\">:</span> <span class=\"token string\">'hai'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// throws a TypeError</span><span class=\"line-numbers-rows\"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre><h2 id=\"Notes\">Notes</h2><p>In ES5, if the argument to this method is not an object (a primitive), then it will cause a <a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError\" title=\"The TypeError object represents an error when a value is not of the expected type.\"><code>TypeError</code></a>. In ES2015, a non-object argument will be treated as if it was a non-extensible ordinary object, simply return it.</p><pre class=\"brush: js line-numbers language-js\"><code class=\" language-js\">Object<span class=\"token punctuation\">.</span><span class=\"token function\">preventExtensions</span><span class=\"token punctuation\">(</span><span class=\"token number\">1</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token comment\" spellcheck=\"true\">// TypeError: 1 is not an object (ES5 code)</span>\n\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">preventExtensions</span><span class=\"token punctuation\">(</span><span class=\"token number\">1</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token comment\" spellcheck=\"true\">// 1 (ES2015 code)</span><span class=\"line-numbers-rows\"><span></span><span></span><span></span><span></span><span></span></span></code></pre><h2 id=\"Specifications\">Specifications</h2>"
              }
            },
            {
              title: "Object.seal()",
              desc: "Prevents other code from deleting properties of an object.",
              "info": {
                "syntax": "Object.seal(obj)",
                "parameters": "<dl>\n <dt><code>obj</code></dt>\n <dd>The object which should be sealed.</dd>\n</dl>",
                "example": "<pre class=\"brush: js line-numbers language-js\"><code class=\" language-js\"><span class=\"token keyword\">var</span> obj <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n prop<span class=\"token punctuation\">:</span> <span class=\"token keyword\">function</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n foo<span class=\"token punctuation\">:</span> <span class=\"token string\">'bar'</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// New properties may be added, existing properties</span>\n<span class=\"token comment\" spellcheck=\"true\">// may be changed or removed.</span>\nobj<span class=\"token punctuation\">.</span>foo <span class=\"token operator\">=</span> <span class=\"token string\">'baz'</span><span class=\"token punctuation\">;</span>\nobj<span class=\"token punctuation\">.</span>lumpy <span class=\"token operator\">=</span> <span class=\"token string\">'woof'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">delete</span> obj<span class=\"token punctuation\">.</span>prop<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">var</span> o <span class=\"token operator\">=</span> Object<span class=\"token punctuation\">.</span><span class=\"token function\">seal</span><span class=\"token punctuation\">(</span>obj<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\no <span class=\"token operator\">===</span> obj<span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// true</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">isSealed</span><span class=\"token punctuation\">(</span>obj<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// === true</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// Changing property values on a sealed object</span>\n<span class=\"token comment\" spellcheck=\"true\">// still works.</span>\nobj<span class=\"token punctuation\">.</span>foo <span class=\"token operator\">=</span> <span class=\"token string\">'quux'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// But you can't convert data properties to accessors,</span>\n<span class=\"token comment\" spellcheck=\"true\">// or vice versa.</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">defineProperty</span><span class=\"token punctuation\">(</span>obj<span class=\"token punctuation\">,</span> <span class=\"token string\">'foo'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n <span class=\"token keyword\">get</span><span class=\"token punctuation\">:</span> <span class=\"token keyword\">function</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span> <span class=\"token keyword\">return</span> <span class=\"token string\">'g'</span><span class=\"token punctuation\">;</span> <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// throws a TypeError</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// Now any changes, other than to property values,</span>\n<span class=\"token comment\" spellcheck=\"true\">// will fail.</span>\nobj<span class=\"token punctuation\">.</span>quaxxor <span class=\"token operator\">=</span> <span class=\"token string\">'the friendly duck'</span><span class=\"token punctuation\">;</span>\n<span class=\"token comment\" spellcheck=\"true\">// silently doesn't add the property</span>\n<span class=\"token keyword\">delete</span> obj<span class=\"token punctuation\">.</span>foo<span class=\"token punctuation\">;</span>\n<span class=\"token comment\" spellcheck=\"true\">// silently doesn't delete the property</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// ...and in strict mode such attempts</span>\n<span class=\"token comment\" spellcheck=\"true\">// will throw TypeErrors.</span>\n<span class=\"token keyword\">function</span> <span class=\"token function\">fail</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n <span class=\"token string\">'use strict'</span><span class=\"token punctuation\">;</span>\n <span class=\"token keyword\">delete</span> obj<span class=\"token punctuation\">.</span>foo<span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// throws a TypeError</span>\n obj<span class=\"token punctuation\">.</span>sparky <span class=\"token operator\">=</span> <span class=\"token string\">'arf'</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// throws a TypeError</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token function\">fail</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// Attempted additions through</span>\n<span class=\"token comment\" spellcheck=\"true\">// Object.defineProperty will also throw.</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">defineProperty</span><span class=\"token punctuation\">(</span>obj<span class=\"token punctuation\">,</span> <span class=\"token string\">'ohai'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n value<span class=\"token punctuation\">:</span> <span class=\"token number\">17</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// throws a TypeError</span>\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">defineProperty</span><span class=\"token punctuation\">(</span>obj<span class=\"token punctuation\">,</span> <span class=\"token string\">'foo'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n value<span class=\"token punctuation\">:</span> <span class=\"token string\">'eit'</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// changes existing property value</span><span class=\"line-numbers-rows\"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre><h2 id=\"Notes\">Notes</h2><p>In ES5, if the argument to this method is not an object (a primitive), then it will cause a <a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError\" title=\"The TypeError object represents an error when a value is not of the expected type.\"><code>TypeError</code></a>. In ES2015, a non-object argument will be treated as if it was a sealed ordinary object, simply return it.</p><pre class=\"brush: js line-numbers language-js\"><code class=\" language-js\">Object<span class=\"token punctuation\">.</span><span class=\"token function\">seal</span><span class=\"token punctuation\">(</span><span class=\"token number\">1</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token comment\" spellcheck=\"true\">// TypeError: 1 is not an object (ES5 code)</span>\n\nObject<span class=\"token punctuation\">.</span><span class=\"token function\">seal</span><span class=\"token punctuation\">(</span><span class=\"token number\">1</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token comment\" spellcheck=\"true\">// 1 (ES2015 code)</span><span class=\"line-numbers-rows\"><span></span><span></span><span></span><span></span><span></span></span></code></pre><h3 id=\"Comparison_to_Object.freeze()\" class=\"highlight-spanned\"><span class=\"highlight-span\">Comparison to <code>Object.freeze()</code></span></h3>"
              }
            },
            {
              title: "Object.setPrototypeOf()",
              desc: "Sets the prototype (i.e., the internal [[Prototype]] property)",
              "info": {
                "syntax": "Object.setPrototypeOf(obj, prototype);",
                "parameters": "<dl>\n <dt><code>obj</code></dt>\n <dd>The object which is to have its prototype set.</dd>\n <dt><code>prototype</code></dt>\n <dd>The object's new prototype (an object or <a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/null\" title=\"The value null&nbsp;represents the intentional absence of any object value. It is one of JavaScript's primitive values.\"><code>null</code></a>).</dd>\n</dl>",
                "example": "<pre class=\"brush: js line-numbers language-js\"><code class=\" language-js\"><span class=\"token keyword\">var</span> dict <span class=\"token operator\">=</span> Object<span class=\"token punctuation\">.</span><span class=\"token function\">setPrototypeOf</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token keyword\">null</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span><span class=\"line-numbers-rows\"><span></span></span></code></pre><h2 id=\"Polyfill\">Polyfill</h2><p>Using the older <a href=\"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__proto__\" title=\"The __proto__ property of Object.prototype is an accessor property (a getter function and a setter function) that exposes the internal [[Prototype]] (either an object or null) of the object through which it is accessed.\"><code>Object.prototype.__proto__</code></a> property, we can easily define <code>Object.setPrototypeOf</code>&nbsp;if it isn't available already:</p><pre class=\"brush: js line-numbers language-js\"><code class=\" language-js\"><span class=\"token comment\" spellcheck=\"true\">// Only works in Chrome and FireFox, does not work in IE:</span>\nObject<span class=\"token punctuation\">.</span>setPrototypeOf <span class=\"token operator\">=</span> Object<span class=\"token punctuation\">.</span>setPrototypeOf <span class=\"token operator\">||</span> <span class=\"token keyword\">function</span><span class=\"token punctuation\">(</span>obj<span class=\"token punctuation\">,</span> proto<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n obj<span class=\"token punctuation\">.</span>__proto__ <span class=\"token operator\">=</span> proto<span class=\"token punctuation\">;</span>\n <span class=\"token keyword\">return</span> obj<span class=\"token punctuation\">;</span> \n<span class=\"token punctuation\">}</span><span class=\"line-numbers-rows\"><span></span><span></span><span></span><span></span><span></span></span></code></pre><h2 id=\"Appending_Prototype_Chains\">Appending Prototype Chains</h2>"
              }
            },
            {
              title: "Object.values()",
              desc: "Returns an array of a given object's own enumerable values.",
              "info": {
                "syntax": "Object.values(obj)",
                "parameters": "<dl>\n <dt><code>obj</code></dt>\n <dd>The object whose enumerable own property values are to be returned.</dd>\n</dl>",
                "example": "<pre class=\"brush: js line-numbers language-js\"><code class=\" language-js\"><span class=\"token keyword\">var</span> obj <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> foo<span class=\"token punctuation\">:</span> <span class=\"token string\">'bar'</span><span class=\"token punctuation\">,</span> baz<span class=\"token punctuation\">:</span> <span class=\"token number\">42</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>Object<span class=\"token punctuation\">.</span><span class=\"token function\">values</span><span class=\"token punctuation\">(</span>obj<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// ['bar', 42]</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// array like object</span>\n<span class=\"token keyword\">var</span> obj <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> <span class=\"token number\">0</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'a'</span><span class=\"token punctuation\">,</span> <span class=\"token number\">1</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'b'</span><span class=\"token punctuation\">,</span> <span class=\"token number\">2</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'c'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>Object<span class=\"token punctuation\">.</span><span class=\"token function\">values</span><span class=\"token punctuation\">(</span>obj<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// ['a', 'b', 'c']</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// array like object with random key ordering</span>\n<span class=\"token keyword\">var</span> an_obj <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> <span class=\"token number\">100</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'a'</span><span class=\"token punctuation\">,</span> <span class=\"token number\">2</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'b'</span><span class=\"token punctuation\">,</span> <span class=\"token number\">7</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'c'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>Object<span class=\"token punctuation\">.</span><span class=\"token function\">values</span><span class=\"token punctuation\">(</span>an_obj<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// ['b', 'c', 'a']</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// getFoo is property which isn't enumerable</span>\n<span class=\"token keyword\">var</span> my_obj <span class=\"token operator\">=</span> Object<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> getFoo<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> value<span class=\"token punctuation\">:</span> <span class=\"token keyword\">function</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span> <span class=\"token keyword\">return</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>foo<span class=\"token punctuation\">;</span> <span class=\"token punctuation\">}</span> <span class=\"token punctuation\">}</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nmy_obj<span class=\"token punctuation\">.</span>foo <span class=\"token operator\">=</span> <span class=\"token string\">'bar'</span><span class=\"token punctuation\">;</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>Object<span class=\"token punctuation\">.</span><span class=\"token function\">values</span><span class=\"token punctuation\">(</span>my_obj<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// ['bar']</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// non-object argument will be coerced to an object</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>Object<span class=\"token punctuation\">.</span><span class=\"token function\">values</span><span class=\"token punctuation\">(</span><span class=\"token string\">'foo'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// ['f', 'o', 'o']</span><span class=\"line-numbers-rows\"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre><h2 id=\"Polyfill\">Polyfill</h2><p>To add compatible <code>Object.values</code> support in older environments that do not natively support it, you can find a Polyfill in the <a href=\"https://github.com/tc39/proposal-object-values-entries\" class=\"external external-icon\" rel=\"noopener\">tc39/proposal-object-values-entries</a> or in the <a href=\"https://github.com/es-shims/Object.values\" class=\"external external-icon\" rel=\"noopener\">es-shims/Object.values</a> repositories.</p><h2 id=\"Specifications\">Specifications</h2><table class=\"standard-table\">\n <tbody>\n <tr>\n <th scope=\"col\">Specification</th>\n <th scope=\"col\">Status</th>\n <th scope=\"col\">Comment</th>\n </tr>\n <tr>\n <td><a href=\"https://tc39.github.io/ecma262/#sec-object.values\" hreflang=\"en\" lang=\"en\" class=\"external external-icon\" rel=\"noopener\">ECMAScript Latest Draft (ECMA-262)<br><small lang=\"en-US\">The definition of 'Object.values' in that specification.</small></a></td>\n <td><span class=\"spec-Living\">Living Standard</span></td>\n <td>Initial definition.</td>\n </tr>\n <tr>\n <td><a href=\"https://tc39.github.io/ecma262/2017/#sec-object.values\" hreflang=\"en\" lang=\"en\" class=\"external external-icon\" rel=\"noopener\">ECMAScript 2017 (ECMA-262)<br><small lang=\"en-US\">The definition of 'Object.values' in that specification.</small></a></td>\n <td><span class=\"spec-Standard\">Standard</span></td>\n <td>&nbsp;</td>\n </tr>\n </tbody>\n</table>"
              }
            }
          ]
        }],
      }]
    };

    this.dataTypes = {
      title: "Data Types",
      desc: "Represent different value types assigned to variables.  \n",
      el: [{
        title: "Data Types",
        desc: "Represent different value types assigned to variables.  \n",
        el: [{
          title: "String",
          descHtml: "A JavaScript string stores a series of characters like \"John Doe\". <br/> var str = \"Hello World!\";",
          el: [{
            title: "charAt()",
            descHtml: "Returns the character at the specified index (position)",
            ex: {
              files: [""],
              code: ["var str = \"HELLO WORLD\";" +
              " var res = str.charAt(0);"
              ]
            },
            test: {
              desc: " ",
              col: 5
            },
            todo: ["Show the character from position equal 2; Check the behavior in case that the position is equal 100?"],
            cols: 2,
            "info": {
              "syntax": "\nstring.charAt(index)",
              "parameters": "<table> \n <tbody><tr>\n <th style=\"width:23%\">Parameter</th>\n <th>Description</th>\n </tr> \n <tr>\n <td><em>index</em></td>\n <td>Required. An integer representing the index of the character you want to return</td>\n </tr>\n</tbody></table>",
              "example": "\n<h3>Example</h3>\n<p>Return the first character of a string:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\n<span style=\"color:mediumblue\">var</span> str = <span style=\"color:brown\">\"HELLO WORLD\"</span>;<br>\n<span style=\"color:mediumblue\">var</span> res = str.<span style=\"color:black\">charAt</span>(<span style=\"color:red\">0</span>); </span></div>\n<p class=\"topmargin\">The result of <em>res</em> will be:</p>\n<div class=\"w3-code notranslate\">\n H</div>\n\n"
            }
          },
            {
              title: "charCodeAt()",
              descHtml: "Returns the Unicode of the character at the specified index; See all the character codes here <a href='http://www.asciitable.com/' target=\"_blank\"> Ascii Table</a>",
              ex: {
                files: [""],
                code: ["var str = \"HELLO WORLD\";" +
                " var res = str.charCodeAt(0);"
                ]
              },
              test: {
                desc: " ",
                col: 5
              },
              todo: ["Show the character from position equal 2; Check the behavior in case that the position is equal 100?"],
              cols: 2,
              "info": {
                "syntax": "\nstring.charCodeAt(index)",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:23%\">Parameter</th>\n <th>Description</th> </tr> \n <tr>\n <td><em>index</em></td>\n <td>Required. A number representing the index of the character you want to return</td>\n </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Return the Unicode of the first character in a string (the Unicode value for \n\"H\"):</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\n<span style=\"color:mediumblue\">var</span> str = <span style=\"color:brown\">\"HELLO WORLD\"</span>;<br>\n<span style=\"color:mediumblue\">var</span> n = str.<span style=\"color:black\">charCodeAt</span>(<span style=\"color:red\">0</span>);<span style=\"color:red\">\n</span> </span></div>\n<p> \nThe result of <em>n</em> will be:</p>\n<div class=\"w3-code notranslate\">\n<script type=\"application/javascript\">\nvar str=\"HELLO WORLD\";\ndocument.write(str.charCodeAt(0));"
              }
            },
            {
              title: "concat()",
              descHtml: "The concat() method is used to join two or more strings.<br/> <b>Syntax:</b> string.concat(string1, string2, ..., stringX)",
              ex: {
                files: [""],
                code: ["var res = str1.concat(str2);"]
              },
              test: {
                desc: " ",
                col: 5
              },
              todo: ["Use concat in order to concatenate 3 strings; What operator can be used to have the same result? "],
              cols: 2,
              "info": {
                "syntax": "\nstring.concat(string1, string2, ..., stringX)",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:30%\">Parameter</th>\n <th>Description</th> \n </tr> \n <tr>\n <td><em>string1</em>, <em>string2</em>, ..., <em>stringX</em></td>\n <td>Required. The strings to be joined</td>\n </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Join two strings:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\n<span style=\"color:mediumblue\">var</span> str1 = <span style=\"color:brown\">\"Hello \"</span>;<br>\n<span style=\"color:mediumblue\">var</span> str2 = <span style=\"color:brown\">\"world!\"</span>;<br>\n<span style=\"color:mediumblue\">var</span> res = str1.<span style=\"color:black\">concat</span>(str2);<span style=\"color:red\">\n</span> </span></div>\n<p>The result of <em>res</em> will be:</p>\n<div class=\"w3-code notranslate\">\nHello world!\n</div>\n\n"
              }
            },
            {
              title: "endsWith()",
              descHtml: "Checks whether a string ends with specified string/characters",
              ex: {
                files: [""],
                code: ["var str = \"HELLO WORLD\";" +
                " var res = str.endsWith(\"d\");"
                ]
              },
              test: {
                desc: " ",
                col: 5
              },
              todo: ["Check if the string ends with a specific value"],
              cols: 2,
              "info": {
                "syntax": "\nstring.endsWith(searchvalue, length)",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:23%\">Parameter</th>\n <th>Description</th> </tr> \n <tr>\n <td><em>searchvalue</em></td>\n <td>Required. The string to search for</td>\n </tr>\n <tr>\n <td><em>length</em></td>\n <td>Optional. Specify the length of the string to search. If omitted, the default value is the length of the string</td>\n </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Check if a string ends with \"universe.\":</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\n<span style=\"color:mediumblue\">var</span> str = <span style=\"color:brown\">\"Hello world, welcome to the universe.\"</span>;<br>\n<span style=\"color:mediumblue\">var</span> n = str.<span style=\"color:black\">endsWith</span>(<span style=\"color:brown\">\"universe.\"</span>);<span style=\"color:red\">\n</span> </span></div>\n<p> \nThe result of <em>n</em> will be:</p>\n<div class=\"w3-code notranslate\">\ntrue\n</div>\n\n"
              }
            },
            {
              title: "fromCharCode()",
              descHtml: "Converts Unicode values to characters",
              ex: {
                files: [""],
                code: ["var res = String.fromCharCode(65)"]
              },
              test: {
                desc: " ",
                col: 5
              },
              todo: [],
              cols: 1,
              "info": {
                "syntax": "\nString.fromCharCode(n1, n2, ..., nX)",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:23%\">Parameter</th>\n <th>Description</th> </tr> \n <tr>\n <td><em>n1</em>, <em>n2</em>, ..., <em>nX</em></td>\n <td>Required. One or more Unicode values to be converted</td>\n </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Convert a Unicode number into a character:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\n<span style=\"color:mediumblue\">var</span> res = String.<span style=\"color:black\">fromCharCode</span>(<span style=\"color:red\">65</span>);<span style=\"color:red\">\n</span> </span></div>\n<p>The result of <em>res</em> will be:</p>\n<div class=\"w3-code notranslate\">\nA\n</div>\n\n"
              }
            },
            {
              title: "includes()",
              descHtml: "Checks whether a string contains the specified string/characters",
              ex: {
                files: [""],
                code: ["var str = \"HELLO WORLD\";" +
                " var res = str.includes(0);"
                ]
              },
              test: {
                desc: " ",
                col: 5
              },
              todo: [""],
              cols: 1,
              "info": {
                "syntax": "\nstring.includes(searchvalue, start)",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:23%\">Parameter</th>\n <th>Description</th> </tr> \n <tr>\n <td><em>searchvalue</em></td>\n <td>Required. The string to search for</td>\n </tr>\n <tr>\n <td><em>start</em></td>\n <td>Optional. Default 0. At which position to start the search</td>\n </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Check if a string includes \"world\":</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\n<span style=\"color:mediumblue\">var</span> str = <span style=\"color:brown\">\"Hello world, welcome to the universe.\"</span>;<br>\n<span style=\"color:mediumblue\">var</span> n = str.<span style=\"color:black\">includes</span>(<span style=\"color:brown\">\"world\"</span>);<span style=\"color:red\">\n</span> </span></div>\n<p> \nThe result of <em>n</em> will be:</p>\n<div class=\"w3-code notranslate\">\ntrue\n</div>\n\n"
              }
            },
            {
              title: "indexOf()",
              descHtml: "Returns the position of the first found occurrence of a specified value in a string",
              ex: {
                files: [""],
                code: ["var str = \"HELLO WORLD\";" +
                " var res = str.indexOf('WO');"
                ]
              },
              test: {
                desc: " ",
                col: 5
              },
              todo: [],
              cols: 2,
              "info": {
                "syntax": "\nstring.indexOf(searchvalue, start)",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:23%\">Parameter</th>\n <th>Description</th> </tr> \n <tr>\n <td><em>searchvalue</em></td>\n <td>Required. The string to search for</td>\n </tr>\n <tr>\n <td><em>start</em></td>\n <td>Optional. Default 0. At which position to start the search</td>\n </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Search a string for \"welcome\":</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\n<span style=\"color:mediumblue\">var</span> str = <span style=\"color:brown\">\"Hello world, welcome to the universe.\"</span>;<br>\n<span style=\"color:mediumblue\">var</span> n = str.<span style=\"color:black\">indexOf</span>(<span style=\"color:brown\">\"welcome\"</span>);<span style=\"color:red\">\n</span> </span></div>\n<p> \nThe result of <em>n</em> will be:</p>\n<div class=\"w3-code notranslate\">\n<script>\nvar str=\"Hello world, welcome to the universe.\";\ndocument.write(str.indexOf(\"welcome\"));"
              }
            },
            {
              title: "lastIndexOf()",
              descHtml: "Returns the position of the last found occurrence of a specified value in a string",
              ex: {
                files: [""],
                code: ["var str = \"tra-la-la\";" +
                " var res = str.lastIndexOf(\"la\");"
                ]
              },
              test: {
                desc: " ",
                col: 5
              },
              todo: [""],
              cols: 2,
              "info": {
                "syntax": "\nstring.lastIndexOf(searchvalue, start)\n",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:23%\">Parameter</th>\n <th>Description</th> </tr> \n <tr>\n <td><em>searchvalue</em></td>\n <td>Required. The string to search for</td>\n </tr>\n <tr>\n <td><em>start</em></td>\n <td>Optional. The position where to start the search (searching backwards). If omitted, the default value is the length of the string</td>\n </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Search a string for the last occurrence of \"planet\":</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\n<span style=\"color:mediumblue\">var</span> str = <span style=\"color:brown\">\"Hello planet earth, you are a great planet.\"</span>;<br>\n<span style=\"color:mediumblue\">var</span> n = str.<span style=\"color:black\">lastIndexOf</span>(<span style=\"color:brown\">\"planet\"</span>);<span style=\"color:red\">\n</span> </span></div>\n<p> \nThe result of <em>n</em> will be:</p>\n<div class=\"w3-code notranslate\">\n<script>\nvar str=\"Hello planet earth, you are a great planet.\";\ndocument.write(str.lastIndexOf(\"planet\"));"
              }
            },
            {
              title: "localeCompare()",
              descHtml: "The localeCompare() method returns a number indicating whether the string comes before, after or is equal as the compareString in sort order",
              ex: {
                files: [""],
                code: ["var str = \"HELLO WORLD\";" +
                " var res = str.charAt(0);"
                ]
              },
              test: {
                desc: " ",
                col: 5
              },
              todo: [],
              cols: 2,
              "info": {
                "syntax": "\nstring.localeCompare(compareString)",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:23%\">Parameter</th>\n <th>Description</th> </tr> \n <tr>\n <td><em>compareString</em></td>\n <td>Required. The string to compare with</td>\n </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Compare two strings in the current locale:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\n<span style=\"color:mediumblue\">var</span> str1 = <span style=\"color:brown\">\"ab\"</span>;<br><span style=\"color:mediumblue\">var</span> str2 = <span style=\"color:brown\">\"cd\"</span>;<br><span style=\"color:mediumblue\">var</span> n = str1.<span style=\"color:black\">localeCompare</span>(str2);<span style=\"color:red\">\n</span> </span></div>\n<p>The result of <em>n</em> will be:</p>\n<div class=\"w3-code notranslate\">\n -1 // str1 is sorted before str2</div>\n\n"
              }
            },
            {
              title: "length",
              descHtml: "Represents the string length and is a property ",
              ex: {
                files: [""],
                code: ["var str = \"HELLO WORLD\";" +
                " var res = str.length;"
                ]
              },
              test: {
                desc: " ",
                col: 5
              },
              todo: [],
              cols: 2
            },
            {
              title: "match()",
              descHtml: "Searches a string for a match against a regular expression, and returns the matches. <br/> <a href='regex.html' target='_blank'>Regex explained</a>",
              ex: {
                files: [""],
                code: ["var str = \"The rain in SPAIN stays mainly in the plain\" + \"",
                  "var res = str.match(/ain/g);"
                ],
              },
              test: {
                desc: " ",
                col: 5
              },
              todo: [""],
              cols: 2,
              "info": {
                "syntax": "\nstring.match(regexp)",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:23%\">Parameter</th>\n <th>Description</th> </tr> \n <tr>\n <td><em>regexp</em></td>\n <td>Required. The value to search for, as a regular expression.</td>\n </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Search a string for \"ain\":</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\n<span style=\"color:mediumblue\">var</span> str = <span style=\"color:brown\">\"The rain in SPAIN stays mainly in the plain\"</span>; <br>\n<span style=\"color:mediumblue\">var</span> res = str.<span style=\"color:black\">match</span>(/ain/g);<span style=\"color:red\">\n</span> </span></div>\n<p>The result of <em>res</em> will be an array with the values:</p>\n<div class=\"w3-code notranslate\">\n<script>\nvar str = \"The rain in SPAIN stays mainly in the plain\"; \ndocument.write(str.match(/ain/g));"
              }
            },
            {
              title: "repeat()",
              descHtml: "Returns a new string with a specified number of copies of an existing string",
              ex: {
                files: [""],
                code: ["var str = \"HELLO WORLD\";" +
                " var res = str.repeat(2);"
                ]
              },
              test: {
                desc: " ",
                col: 5
              },
              todo: [""],
              cols: 2,
              "info": {
                "syntax": "\nstring.repeat(count)",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:23%\">Parameter</th>\n <th>Description</th> </tr> \n <tr>\n <td><em>count</em></td>\n <td>Required. The number of times the original string value should be repeated in the new string</td>\n </tr>\n </tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Make a new string by copying a string twice:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\n<span style=\"color:mediumblue\">var</span> str = <span style=\"color:brown\">\"Hello world!\"</span>;<br><span style=\"color:red\">\n</span> str.<span style=\"color:black\">repeat</span>(<span style=\"color:red\">2</span>);<span style=\"color:red\">\n</span> </span></div>\n<p>The result would be:</p>\n<div class=\"w3-code notranslate\">\n Hello world!Hello world!\n</div>\n"
              }
            },
            {
              title: "replace()",
              descHtml: "Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced",
              ex: {
                files: [""],
                code: ["var str = \"HELLO Microsoft\";" +
                " var res = str.replace(\"Microsoft\", \"W3Schools\");"
                ]
              },
              test: {
                desc: " ",
                col: 5
              },
              todo: [],
              cols: 2,
              "info": {
                "syntax": "\nstring.replace(searchvalue, newvalue)",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:23%\">Parameter</th>\n <th>Description</th> </tr> \n <tr>\n <td><em>searchvalue</em></td>\n <td>Required. The value, or regular expression, that will be replaced by the new value</td>\n </tr>\n <tr>\n <td><em>newvalue</em></td>\n <td>Required. The value to replace the search value with</td>\n </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Return a string where \"Microsoft\" is replaced with \"W3Schools\":</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\n<span style=\"color:mediumblue\">var</span> str = <span style=\"color:brown\">\"Visit Microsoft!\"</span>;<br>\n<span style=\"color:mediumblue\">var</span> res = str.<span style=\"color:black\">replace</span>(<span style=\"color:brown\">\"Microsoft\"</span>, <span style=\"color:brown\">\"W3Schools\"</span>);<span style=\"color:red\">\n</span> </span></div>\n<p>The result of <em>res</em> will be:</p>\n<div class=\"w3-code notranslate\">\nVisit W3Schools!\n</div>\n\n"
              }
            },
            {
              title: "search()",
              descHtml: "Searches a string for a specified value, or regular expression, and returns the position of the match",
              ex: {
                files: [""],
                code: ["var str = \"HELLO monday\";" +
                " var n = str.search(\"monday\");"
                ]
              },
              test: {
                desc: " ",
                col: 5
              },
              todo: [""],
              cols: 1,
              "info": {
                "syntax": "\nstring.search(searchvalue)",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:23%\">Parameter</th>\n <th>Description</th> </tr> \n <tr>\n <td><em>searchvalue</em></td>\n <td>Required. A regular expression. <br>A string will automatically be converted to a regular expression.</td>\n </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Search for \"W3Schools\":</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\n<span style=\"color:mediumblue\">var</span> str = <span style=\"color:brown\">\"Visit W3Schools!\"</span>;<br>\n<span style=\"color:mediumblue\">var</span> n = str.<span style=\"color:black\">search</span>(<span style=\"color:brown\">\"W3Schools\"</span>);<span style=\"color:red\">\n</span> </span></div>\n<p>The result of <em>n</em> will be:</p>\n<div class=\"w3-code notranslate\">\n<script type=\"application/javascript\">\nvar str=\"Visit W3Schools!\"\ndocument.write(str.search(\"W3Schools\"));"
              }
            },
            {
              title: "slice()",
              descHtml: "Extracts a part of a string and returns a new string",
              ex: {
                files: [""],
                code: ["var str = \"HELLO WORLD\";" +
                " var res = str.slice(1, 5);"
                ]
              },
              test: {
                desc: " ",
                col: 5
              },
              todo: [""],
              cols: 2,
              "info": {
                "syntax": "\nstring.slice(start, end)",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:23%\">Parameter</th>\n <th>Description</th> </tr> \n <tr>\n <td><em>start</em></td>\n <td>Required. The position where to begin the extraction. First character is at position 0</td>\n </tr>\n <tr>\n <td><em>end</em></td>\n <td>Optional. The position (up to, but not including) where to end the extraction.\n If omitted, slice() selects all characters from the start-position to the end of the string</td>\n </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Extract parts of a string:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\n<span style=\"color:mediumblue\">var</span> str = <span style=\"color:brown\">\"Hello world!\"</span>;<br>\n<span style=\"color:mediumblue\">var</span> res = str.<span style=\"color:black\">slice</span>(<span style=\"color:red\">1</span>, <span style=\"color:red\">5</span>);<span style=\"color:red\">\n</span> </span></div>\n<p>The result of <em>res</em> will be:</p>\n<div class=\"w3-code notranslate\">\nello\n</div>\n"
              }
            },
            {
              title: "split()",
              descHtml: "Splits a string into an array of substrings",
              ex: {
                files: [""],
                code: ["var str = \"HELLO WORLD\";" +
                "var res = str.split(\" \");"
                ]
              },
              test: {
                desc: " ",
                col: 5
              },
              todo: [""],
              cols: 2,
              "info": {
                "syntax": "\nstring.split(separator, limit)",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:23%\">Parameter</th>\n <th>Description</th> </tr> \n <tr>\n <td><em>separator</em></td>\n <td>Optional. Specifies the character, or the regular expression, to use for splitting the string. If omitted, the entire string will be returned (an array with only one item)</td>\n </tr>\n <tr>\n <td><em>limit</em></td>\n <td>Optional. An integer that specifies the number of splits, items after the split limit will not be included in the array</td>\n </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Split a string into an array of substrings:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\n<span style=\"color:mediumblue\">var</span> str = <span style=\"color:brown\">\"How are you doing today?\"</span>;<br>\n<span style=\"color:mediumblue\">var</span> res = str.<span style=\"color:black\">split</span>(<span style=\"color:brown\">\" \"</span>);<span style=\"color:red\">\n</span> </span></div>\n<p>The result of <em>res</em> will be an array with the values:</p>\n<div class=\"w3-code notranslate\">\nHow,are,you,doing,today?\n</div>\n\n"
              }
            },
            {
              title: "startsWith()",
              descHtml: "Checks whether a string begins with specified characters",
              ex: {
                files: [""],
                code: ["var str = \"HELLO WORLD\";" +
                " var res = str.startsWith('HE');"
                ]
              },
              test: {
                desc: " ",
                col: 5
              },
              todo: [],
              cols: 2,
              "info": {
                "syntax": "\nstring.startsWith(searchvalue, start)",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:23%\">Parameter</th>\n <th>Description</th> </tr> \n <tr>\n <td><em>searchvalue</em></td>\n <td>Required. The string to search for</td>\n </tr>\n <tr>\n <td><em>start</em></td>\n <td>Optional. Default 0. At which position to start the search</td>\n </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Check if a string starts with \"Hello\":</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\n<span style=\"color:mediumblue\">var</span> str = <span style=\"color:brown\">\"Hello world, welcome to the universe.\"</span>;<br>\n<span style=\"color:mediumblue\">var</span> n = str.<span style=\"color:black\">startsWith</span>(<span style=\"color:brown\">\"Hello\"</span>);<span style=\"color:red\">\n</span> </span></div>\n<p> \nThe result of <em>n</em> will be:</p>\n<div class=\"w3-code notranslate\">\ntrue\n</div>\n\n"
              }
            },
            {
              title: "substr()",
              descHtml: "Extracts the characters from a string, beginning at a specified start position, and through the specified number of character",
              ex: {
                files: [""],
                code: ["var str = \"HELLO WORLD\";" +
                " var res = str.substr(1, 4);"
                ]
              },
              test: {
                desc: " ",
                col: 5
              },
              todo: [],
              cols: 2,
              "info": {
                "syntax": "\nstring.substr(start, length)",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:23%\">Parameter</th>\n <th>Description</th> </tr> \n <tr>\n <td><em>start</em></td>\n <td>Required. The position where to start the extraction. First character is at index 0.<br>\n <br>If <em>start</em> is positive and greater than, or equal, to the length \n of the string, substr() returns an empty string.<br><br>If <em>start</em> is \n negative, substr() uses it as a character index from the end of the string.\n <br><br>If <em>start </em>is negative or larger than the length of the \n string, <em>start</em> is set to 0</td>\n </tr>\n <tr>\n <td><em>length</em></td>\n <td>Optional. The number of characters to extract. If omitted, it extracts the rest of the string</td>\n </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Extract parts of a string:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\n<span style=\"color:mediumblue\">var</span> str = <span style=\"color:brown\">\"Hello world!\"</span>;<br>\n<span style=\"color:mediumblue\">var</span> res = str.<span style=\"color:black\">substr</span>(<span style=\"color:red\">1</span>, <span style=\"color:red\">4</span>); </span></div>\n<p>The result of <em>res</em> will be:</p>\n<div class=\"w3-code notranslate\">\n ello</div>\n\n"
              }
            },
            {
              title: "substring()",
              descHtml: "Extracts the characters from a string, between two specified indices",
              ex: {
                files: [""],
                code: ["var str = \"HELLO WORLD\";" +
                " var res = str.charAt(0);"
                ]
              },
              test: {
                desc: " ",
                col: 5
              },
              todo: [],
              cols: 2,
              "info": {
                "syntax": "\nstring.substring(start, end)",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:23%\">Parameter</th>\n <th>Description</th> </tr> \n <tr>\n <td><em>start</em></td>\n <td>Required. The position where to start the extraction. First character is at index 0</td>\n </tr>\n <tr>\n <td><em>end</em></td>\n <td>Optional. The position (up to, but not including) where to end the extraction. If omitted, it extracts the rest of the string</td>\n </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Extract characters from a string:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\"><span style=\"color:red\">\n</span> <span style=\"color:mediumblue\">var</span> str = <span style=\"color:brown\">\"Hello world!\"</span>;<br><span style=\"color:mediumblue\">var</span> res = str.<span style=\"color:black\">substring</span>(<span style=\"color:red\">1</span>, <span style=\"color:red\">4</span>);<span style=\"color:red\">\n</span> </span></div>\n<p>The result of <em>res</em> will be:</p>\n<div class=\"w3-code notranslate\">\n ell</div>\n\n"
              }
            },
            {
              title: "toLocaleLowerCase()",
              descHtml: "Converts a string to lowercase letters, according to the host's locale",
              ex: {
                files: [""],
                code: ["var str = \"HELLO WORLD\";" +
                " var res = str.toLocaleLowerCase();"
                ]
              },
              test: {
                desc: " ",
                col: 5
              },
              todo: [],
              cols: 1,
              "info": {
                "syntax": "\nstring.toLocaleLowerCase()",
                "parameters": "",
                "example": "\n<h3>Example</h3>\n<p>Convert the string to lowercase letters:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\"><span style=\"color:red\">\n</span> <span style=\"color:mediumblue\">var</span> str = <span style=\"color:brown\">\"Hello World!\"</span>;<br><span style=\"color:mediumblue\">var</span> res = str.<span style=\"color:black\">toLocaleLowerCase</span>();<span style=\"color:red\">\n</span> </span></div>\n<p>The result of <em>res</em> could be:</p>\n<div class=\"w3-code notranslate\">\n hello world!</div>\n\n"
              }
            },
            {
              title: "toLocaleUpperCase())",
              descHtml: "Converts a string to uppercase letters, according to the host's locale",
              ex: {
                files: [""],
                code: ["var str = \"HEllO WORLD\";" +
                " var res = str.toLocaleUpperCase(0);"
                ]
              },
              test: {
                desc: " ",
                col: 5
              },
              todo: [],
              cols: 1,
              "info": {
                "syntax": "\nstring.toLocaleUpperCase()",
                "parameters": "",
                "example": "\n<h3>Example</h3>\n<p>Convert the string to uppercase letters:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\"><span style=\"color:red\">\n</span> <span style=\"color:mediumblue\">var</span> str = <span style=\"color:brown\">\"Hello World!\"</span>;<br><span style=\"color:mediumblue\">var</span> res = str.<span style=\"color:black\">toLocaleUpperCase</span>();<span style=\"color:red\">\n</span> </span></div>\n<p>The result of <em>res</em> could be:</p>\n<div class=\"w3-code notranslate\">\n HELLO WORLD!</div>\n\n"
              }
            },
            {
              title: "toLowerCase()",
              descHtml: "Converts a string to lowercase letters",
              ex: {
                files: [""],
                code: ["var str = \"HELLO WORLD\";" +
                " var res = str.toLowerCase();"
                ]
              },
              test: {
                desc: " ",
                col: 5
              },
              todo: [],
              cols: 2,
              "info": {
                "syntax": "\nstring.toLowerCase()",
                "parameters": "",
                "example": "\n<h3>Example</h3>\n<p>Convert the string to lowercase letters:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\"><span style=\"color:red\">\n</span> <span style=\"color:mediumblue\">var</span> str = <span style=\"color:brown\">\"Hello World!\"</span>;<br><span style=\"color:mediumblue\">var</span> res = str.<span style=\"color:black\">toLowerCase</span>();<span style=\"color:red\">\n</span> </span></div>\n<p>The result of <em>res</em> will be:</p>\n<div class=\"w3-code notranslate\">\n hello world!</div>\n\n"
              }
            },
            {
              title: "toString()",
              descHtml: "Returns the value of a String object",
              ex: {
                files: [""],
                code: ["var str = \"HELLO WORLD\";" +
                " var res = str.toString();"
                ]
              },
              test: {
                desc: " ",
                col: 5
              },
              todo: [],
              cols: 1,
              "info": {
                "syntax": "\nstring.toString()",
                "parameters": "",
                "example": "\n<h3>Example</h3>\n<p>Return the value of a String object:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\"><span style=\"color:red\">\n</span> <span style=\"color:mediumblue\">var</span> str = <span style=\"color:brown\">\"Hello World!\"</span>;<br><span style=\"color:mediumblue\">var</span> res = str.<span style=\"color:black\">toString</span>(); </span></div>\n<p>The result <em>res</em> of will be:</p>\n<div class=\"w3-code notranslate\">\n Hello World!</div>\n\n"
              }
            },
            {
              title: "toUpperCase()",
              descHtml: "Converts a string to uppercase letters",
              ex: {
                files: [""],
                code: ["var str = \"HELLO woRLD\";" +
                " var res = str.toUpperCase();"
                ]
              },
              test: {
                desc: " ",
                col: 5
              },
              todo: [],
              cols: 2,
              "info": {
                "syntax": "\nstring.toUpperCase()",
                "parameters": "",
                "example": "\n<h3>Example</h3>\n<p>Convert the string to uppercase letters:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\"><span style=\"color:red\">\n</span> <span style=\"color:mediumblue\">var</span> str = <span style=\"color:brown\">\"Hello World!\"</span>;<br><span style=\"color:mediumblue\">var</span> res = str.<span style=\"color:black\">toUpperCase</span>();<span style=\"color:red\">\n</span> </span></div>\n<p>The result of <em>res</em> will be:</p>\n<div class=\"w3-code notranslate\">\n HELLO WORLD!</div>\n\n"
              }
            },
            {
              title: "trim()",
              descHtml: "Removes whitespace from both ends of a string",
              ex: {
                files: [""],
                code: ["var str = \"  HELLO WORLD  \";" +
                " var res = str.trim();"
                ]
              },
              test: {
                desc: " ",
                col: 5
              },
              todo: [],
              cols: 2,
              "info": {
                "syntax": "\nstring.trim()",
                "parameters": "",
                "example": "\n<h3>Example</h3>\n<p>Remove whitespace from both sides of a string:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\"><span style=\"color:red\">\n</span> <span style=\"color:mediumblue\">var</span> str = <span style=\"color:brown\">\"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hello World!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \"</span>;<br>alert(str.<span style=\"color:black\">trim</span>());<span style=\"color:red\">\n</span> </span></div>\n<p>The alert box will display:</p>\n<div class=\"w3-code notranslate\">\n Hello World!</div>\n\n"
              }
            },
            {
              title: "prototype",
              descHtml: "Returns the Unicode of the character at the specified index",
              ex: {
                files: [""],
                code: ["String.prototype.customFunc= function(){ " +
                " return 'aaa - ' + this; " +
                "}"
                ]
              },
              test: {
                desc: " ",
                col: 5
              },
              todo: ["Create a new prototype function used to return the input value with first letter capitalized; ex: mihai => Mihai"],
              cols: 2
            },
          ]
        },
          {
            title: "Number",
            descHtml: "What's the purpose of numeric data types?",
            el: [{
              title: "Methods",
              descHtml: "",
              ex: {
                files: ["numbers.PNG"],
                code: ["<a href='https://www.mkyong.com/javascript/check-if-variable-is-a-number-in-javascript/'> isNaN </a>"]
              },
              test: {
                desc: " ",
                col: 5
              },
              todo: ["Pay attantion to toFixed, toPrecision"],
              cols: 2
            }, ]
          },
          {
            title: "Boolean",
            descHtml: "JavaScript booleans can have one of two values: true or false. <br/> 10>9 --> true",

          },
          {
            title: "Date",
            descHtml: "The Date object is used to work with dates and times. <br/> " +
            " Date objects are created with new Date(). <br/>" +
            " There are four ways of instantiating a date: <br/>",
            ex: {
              files: ["date.PNG"],
              code: ["<a href='https://momentjs.com/' target='_blank'>Date Utils</a> "]
            },
          },
          {
            title: "Array",
            descHtml: "The Array object is used to store multiple values in a single variable",
            el: [{
              "title": "constructor",
              "descHtml": "Returns the function that created the Array object's prototype",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2
            }, {
              "title": "length",
              "descHtml": "Sets or returns the number of elements in an array",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\narray.length\narray.length = number",
                "parameters": "",
                "example": "\n<h3>Example</h3>\n<p>Return the length of an array:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\"><span style=\"color:red\">\n</span> <span style=\"color:mediumblue\">var</span> fruits = [<span style=\"color:brown\">\"Banana\"</span>, <span style=\"color:brown\">\"Orange\"</span>, <span style=\"color:brown\">\"Apple\"</span>, <span style=\"color:brown\">\"Mango\"</span>];<br>fruits.<span style=\"color:black\">length</span>; </span></div>\n<p>The result will be:</p>\n<div class=\"w3-code notranslate\">\n 4</div>\n\n"
              }
            }, {
              "title": "prototype",
              "descHtml": "Allows you to add properties and methods to an Array object",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2
            }, {
              "title": "concat()",
              "descHtml": "Joins two or more arrays, and returns a copy of the joined arrays",
              "ex": {
                "files": ["array_concat.png"],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\narray1.concat(array2, array3, ..., arrayX)",
                "parameters": "<table> \n  <tbody><tr>\n    <th style=\"width:30%\">Parameter</th>\n    <th>Description</th>\n  </tr>  \n  <tr>\n    <td><em>array2</em>, <em>array3</em>, ..., <em>arrayX</em></td>\n    <td>Required. The arrays to be joined</td>\n  </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Join two arrays:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\n<span style=\"color:mediumblue\">var</span> hege = [<span style=\"color:brown\">\"Cecilie\"</span>, <span style=\"color:brown\">\"Lone\"</span>];<br>\n<span style=\"color:mediumblue\">var</span> stale = [<span style=\"color:brown\">\"Emil\"</span>, <span style=\"color:brown\">\"Tobias\"</span>, <span style=\"color:brown\">\"Linus\"</span>];<br>\n<span style=\"color:mediumblue\">var</span> children = hege.<span style=\"color:black\">concat</span>(stale);<span style=\"color:red\">\n</span> </span></div>\n<p>The values of the <em>children</em> array will be:</p>\n<div class=\"w3-code notranslate\">\nCecilie,Lone,Emil,Tobias,Linus</div>\n\n"
              }
            }, {
              "title": "copyWithin()",
              "descHtml": "Copies array elements within the array, to and from specified positions </br> <b>Syntax</b> array.copyWithin(target, start, end)",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\narray.copyWithin(target, start, end)",
                "parameters": "<table> \n  <tbody><tr>\n    <th style=\"width:26%\">Parameter</th>\n    <th>Description</th>\n  </tr>  \n    <tr>\n    <td><em>target</em></td>\n    <td>Required. The index position to copy the elements to</td>\n    </tr>\n  <tr>\n    <td><em>start</em></td>\n    <td>Optional. The index position to start copying elements from&nbsp; \n    (default is 0)</td>\n    </tr>\n  <tr>\n    <td><em>end</em></td>\n    <td>Optional. The index position to stop copying elements from (default is <em>array</em>.length)</td>\n  </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Copy the first two array elements to the last two array elements:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\n<span style=\"color:mediumblue\">var</span> fruits = [<span style=\"color:brown\">\"Banana\"</span>, <span style=\"color:brown\">\"Orange\"</span>, <span style=\"color:brown\">\"Apple\"</span>, <span style=\"color:brown\">\"Mango\"</span>];<br><span style=\"color:red\">\n</span> fruits.<span style=\"color:black\">copyWithin</span>(<span style=\"color:red\">2</span>, <span style=\"color:red\">0</span>); </span></div>\n<p>The result of <em>fruits</em> will be:</p>\n<div class=\"w3-code notranslate\">\n Banana,Orange,Banana,Orange</div>\n\n"
              }
            }, {
              "title": "every()",
              "descHtml": "Checks if every element in an array pass a test",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\narray.every(function(currentValue, index, arr), thisValue)",
                "parameters": "<table> \n  <tbody><tr>\n    <th style=\"width:25%\">Parameter</th>\n    <th>Description</th>\n  </tr>  \n  <tr>\n    <td><em>function(currentValue, index, arr)</em></td>\n    <td>Required. A function to be run for each element in the array.<br>Function arguments:<table class=\"w3-table-all notranslate\"> \n  <tbody><tr>\n    <th style=\"width:25%\">Argument</th>\n    <th>Description</th>\n  </tr>  \n  <tr>\n    <td><em>currentValue</em></td>\n    <td>Required. The value of the current element</td>\n  </tr>\n  <tr>\n    <td><em>index</em></td>\n    <td>Optional. The array index of the current element</td>\n  </tr>\n    <tr>\n    <td><em>arr</em></td>\n    <td>Optional. The array object the current element belongs to</td>\n  </tr>\n</tbody></table>\n\n   </td>\n  </tr>\n    <tr>\n    <td><em>thisValue</em></td>\n    <td>Optional. A value to be passed to the function to be used as its \"this\" value.<br>If this parameter is empty, the value \"undefined\" will be passed as its \"this\" value</td>\n  </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Check if all the values in the <em>ages</em> array are 18 or over:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\"><span style=\"color:red\">\n</span> <span style=\"color:mediumblue\">var</span> ages = [<span style=\"color:red\">32</span>, <span style=\"color:red\">33</span>, <span style=\"color:red\">16</span>, <span style=\"color:red\">40</span>];<br><br><span style=\"color:mediumblue\">function</span> checkAdult(age) {<br>&nbsp;&nbsp;&nbsp; <span style=\"color:mediumblue\">return</span> age &gt;= <span style=\"color:red\">18</span>;<br>}<br><span style=\"color:red\">\n</span> <br><span style=\"color:mediumblue\">function</span> myFunction() {<br>&nbsp;&nbsp;&nbsp; document.<span style=\"color:black\">getElementById</span>(<span style=\"color:brown\">\"demo\"</span>).<span style=\"color:black\">innerHTML</span> = ages.<span style=\"color:black\">every</span>(checkAdult);<br>} </span></div>\n<p>The result will be:</p>\n<div class=\"w3-code notranslate\">\n false</div>\n\n"
              }
            }, {
              "title": "fill()",
              "descHtml": "Fill the elements in an array with a static value",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": { "syntax": "\narray.fill(value, start, end)", "parameters": "<table> \n  <tbody><tr>\n    <th style=\"width:26%\">Parameter</th>\n    <th>Description</th>\n  </tr>  \n    <tr>\n    <td><em>value</em></td>\n    <td>Required. The value to fill the array with</td>\n    </tr>\n  <tr>\n    <td><em>start</em></td>\n    <td>Optional. The index to start filling the array (default is 0)</td>\n    </tr>\n  <tr>\n    <td><em>end</em></td>\n    <td>Optional. The index to stop filling the array (default is <em>array</em>.length)</td>\n  </tr>\n</tbody></table>", "example": "\n<h3>Example</h3>\n<p>Fill all the array elements with a static value:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\n<span style=\"color:mediumblue\">var</span> fruits = [<span style=\"color:brown\">\"Banana\"</span>, <span style=\"color:brown\">\"Orange\"</span>, <span style=\"color:brown\">\"Apple\"</span>, <span style=\"color:brown\">\"Mango\"</span>];<br>\nfruits.<span style=\"color:black\">fill</span>(<span style=\"color:brown\">\"Kiwi\"</span>); </span></div>\n<p>The result of <em>fruits</em> will be:</p>\n<div class=\"w3-code notranslate\">\n Kiwi,Kiwi,Kiwi,Kiwi</div>\n\n" }
            }, {
              "title": "filter()",
              "descHtml": "Creates a new array with every element in an array that pass a test",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\narray.filter(function(currentValue, index, arr), thisValue)",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:25%\">Parameter</th>\n <th>Description</th>\n </tr> \n <tr>\n <td><em>function(currentValue, index,arr)</em></td>\n <td>Required. A function to be run for each element in the array.<br>Function arguments:<table class=\"w3-table-all notranslate\"> \n <tbody><tr>\n <th style=\"width:25%\">Argument</th>\n <th>Description</th>\n </tr> \n <tr>\n <td><em>currentValue</em></td>\n <td>Required. The value of the current element</td>\n </tr>\n <tr>\n <td><em>index</em></td>\n <td>Optional. The array index of the current element</td>\n </tr>\n <tr>\n <td><em>arr</em></td>\n <td>Optional. The array object the current element belongs to</td>\n </tr>\n</tbody></table>\n\n </td>\n </tr>\n <tr>\n <td><em>thisValue</em></td>\n <td>Optional. A value to be passed to the function to be used as its \"this\" value.<br>If this parameter is empty, the value \"undefined\" will be passed as its \"this\" value</td>\n </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Return an array of all the values in the <em>ages</em> array that are 18 or over:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\"><span style=\"color:red\">\n</span> <span style=\"color:mediumblue\">var</span> ages = [<span style=\"color:red\">32</span>, <span style=\"color:red\">33</span>, <span style=\"color:red\">16</span>, <span style=\"color:red\">40</span>];<br><br><span style=\"color:mediumblue\">function</span> checkAdult(age) {<br>&nbsp;&nbsp;&nbsp; <span style=\"color:mediumblue\">return</span> age &gt;= <span style=\"color:red\">18</span>;<br>}<br><span style=\"color:red\">\n</span> <br><span style=\"color:mediumblue\">function</span> myFunction() {<br>&nbsp;&nbsp;&nbsp; document.<span style=\"color:black\">getElementById</span>(<span style=\"color:brown\">\"demo\"</span>).<span style=\"color:black\">innerHTML</span> = ages.<span style=\"color:black\">filter</span>(checkAdult);<br>} </span></div>\n<p>The result will be:</p>\n<div class=\"w3-code notranslate\">\n 32,33,40</div>\n\n"
              }
            }, {
              "title": "find()",
              "descHtml": "Returns the value of the first element in an array that pass a test",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\narray.find(function(currentValue, index, arr),thisValue)",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:25%\">Parameter</th>\n <th>Description</th>\n </tr> \n <tr>\n <td><em>function(currentValue, index, arr)</em></td>\n <td>Required. A function to be run for each element in the array.<br>Function arguments:<table class=\"w3-table-all notranslate\"> \n <tbody><tr>\n <th style=\"width:25%\">Argument</th>\n <th>Description</th>\n </tr> \n <tr>\n <td><em>currentValue</em></td>\n <td>Required. The value of the current element</td>\n </tr>\n <tr>\n <td><em>index</em></td>\n <td>Optional. The array index of the current element</td>\n </tr>\n <tr>\n <td><em>arr</em></td>\n <td>Optional. The array object the current element belongs to</td>\n </tr>\n</tbody></table>\n\n </td>\n </tr>\n <tr>\n <td><em>thisValue</em></td>\n <td>Optional. A value to be passed to the function to be used as its \"this\" value.<br>If this parameter is empty, the value \"undefined\" will be passed as its \"this\" value</td>\n </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Get the value of the first element in the array that has a value of 18 or \nmore:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\"><span style=\"color:red\">\n</span> <span style=\"color:mediumblue\">var</span> ages = [<span style=\"color:red\">3</span>, <span style=\"color:red\">10</span>, <span style=\"color:red\">18</span>, <span style=\"color:red\">20</span>];<br><br><span style=\"color:mediumblue\">function</span> checkAdult(age) {<br>&nbsp;&nbsp;&nbsp; <span style=\"color:mediumblue\">return</span> age &gt;= <span style=\"color:red\">18</span>;<br>}<br><br><span style=\"color:mediumblue\">function</span> myFunction() {<br>&nbsp;&nbsp;&nbsp; document.<span style=\"color:black\">getElementById</span>(<span style=\"color:brown\">\"demo\"</span>).<span style=\"color:black\">innerHTML</span> = ages.<span style=\"color:black\">find</span>(checkAdult);<br>} </span></div>\n<p>The result will be:</p>\n<div class=\"w3-code notranslate\">\n 18</div>\n\n"
              }
            }, {
              "title": "findIndex()",
              "descHtml": "Returns the index of the first element in an array that pass a test",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\narray.findIndex(function(currentValue, index, arr), thisValue)",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:25%\">Parameter</th>\n <th>Description</th>\n </tr> \n <tr>\n <td><em>function(currentValue, index,arr)</em></td>\n <td>Required. A function to be run for each element in the array.<br>Function arguments:<table class=\"w3-table-all notranslate\"> \n <tbody><tr>\n <th style=\"width:25%\">Argument</th>\n <th>Description</th>\n </tr> \n <tr>\n <td><em>currentValue</em></td>\n <td>Required. The value of the current element</td>\n </tr>\n <tr>\n <td><em>index</em></td>\n <td>Optional. The array index of the current element</td>\n </tr>\n <tr>\n <td><em>arr</em></td>\n <td>Optional. The array object the current element belongs to</td>\n </tr>\n</tbody></table>\n\n </td>\n </tr>\n <tr>\n <td><em>thisValue</em></td>\n <td>Optional. A value to be passed to the function to be used as its \"this\" value.<br>If this parameter is empty, the value \"undefined\" will be passed as its \"this\" value</td>\n </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Get the index of the first element in the array that has a value of 18 or \nmore:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\"><span style=\"color:red\">\n</span> <span style=\"color:mediumblue\">var</span> ages = [<span style=\"color:red\">3</span>, <span style=\"color:red\">10</span>, <span style=\"color:red\">18</span>, <span style=\"color:red\">20</span>];<br><br><span style=\"color:mediumblue\">function</span> checkAdult(age) {<br>&nbsp;&nbsp;&nbsp; <span style=\"color:mediumblue\">return</span> age &gt;= <span style=\"color:red\">18</span>;<br>}<br><br><span style=\"color:mediumblue\">function</span> myFunction() {<br>&nbsp;&nbsp;&nbsp; document.<span style=\"color:black\">getElementById</span>(<span style=\"color:brown\">\"demo\"</span>).<span style=\"color:black\">innerHTML</span> = ages.<span style=\"color:black\">findIndex</span>(checkAdult);<br>} </span></div>\n<p>The result will be:</p>\n<div class=\"w3-code notranslate\">\n 2</div>\n\n"
              }
            }, {
              "title": "forEach()",
              "descHtml": "Calls a function for each array element",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\narray.forEach(function(currentValue, index, arr), thisValue)",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:25%\">Parameter</th>\n <th>Description</th>\n </tr> \n <tr>\n <td><em>function(currentValue, index, arr)</em></td>\n <td>Required. A function to be run for each element in the array.<br>Function arguments:<table class=\"w3-table-all notranslate\"> \n <tbody><tr>\n <th style=\"width:25%\">Argument</th>\n <th>Description</th>\n </tr> \n <tr>\n <td><em>currentValue</em></td>\n <td>Required. The value of the current element</td>\n </tr>\n <tr>\n <td><em>index</em></td>\n <td>Optional. The array index of the current element</td>\n </tr>\n <tr>\n <td><em>arr</em></td>\n <td>Optional. The array object the current element belongs to</td>\n </tr>\n</tbody></table>\n\n </td>\n </tr>\n <tr>\n <td><em>thisValue</em></td>\n <td>Optional. A value to be passed to the function to be used as its \"this\" value.<br>If this parameter is empty, the value \"undefined\" will be passed as its \"this\" value</td>\n </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>List each item in the array:</p>\n<div class=\"w3-code notranslate htmlHigh\">\n <span style=\"color:brown\"><span style=\"color:mediumblue\">&lt;</span>button<span style=\"color:red\"> onclick<span style=\"color:mediumblue\">=\"numbers.forEach(myFunction)\"</span></span><span style=\"color:mediumblue\">&gt;</span></span>Try it<span style=\"color:brown\"><span style=\"color:mediumblue\">&lt;</span>/button<span style=\"color:mediumblue\">&gt;</span></span><br><span style=\"color:brown\"><span style=\"color:mediumblue\">&lt;</span>p<span style=\"color:red\"> id<span style=\"color:mediumblue\">=\"demo\"</span></span><span style=\"color:mediumblue\">&gt;</span></span><span style=\"color:brown\"><span style=\"color:mediumblue\">&lt;</span>/p<span style=\"color:mediumblue\">&gt;</span></span><br>\n <br><span style=\"color:brown\"><span style=\"color:mediumblue\">&lt;</span>script<span style=\"color:mediumblue\">&gt;</span></span><span style=\"color:black\"><br>demoP = document.<span style=\"color:black\">getElementById</span>(<span style=\"color:brown\">\"demo\"</span>);<br><span style=\"color:mediumblue\">var</span> numbers = [<span style=\"color:red\">4</span>, <span style=\"color:red\">9</span>, <span style=\"color:red\">16</span>, <span style=\"color:red\">25</span>];<br><br><span style=\"color:mediumblue\">function</span> myFunction(item, index) {<br>&nbsp;&nbsp;&nbsp; demoP.<span style=\"color:black\">innerHTML</span> = demoP.<span style=\"color:black\">innerHTML</span> + <span style=\"color:brown\">\"index[\"</span> + index + <span style=\"color:brown\">\"]: \"</span> + item + <span style=\"color:brown\">\"&lt;br&gt;\"</span>; <br>}<br></span><span style=\"color:brown\"><span style=\"color:mediumblue\">&lt;</span>/script<span style=\"color:mediumblue\">&gt;</span></span> </div>\n<p>The result will be:</p>\n<div class=\"w3-code notranslate\">\n index[0]: 4<br>index[1]: 9<br>index[2]: 16<br>index[3]: 25</div>\n\n"
              }
            }, {
              "title": "indexOf()",
              "descHtml": "Search the array for an element and returns its position",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\narray.indexOf(item, start)",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:23%\">Parameter</th>\n <th>Description</th> \n </tr> \n <tr>\n <td><em>item</em></td>\n <td>Required. The item to search for</td>\n </tr>\n <tr>\n <td><em>start</em></td>\n <td>Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the end.</td>\n </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Search an array for the item \"Apple\":</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\n<span style=\"color:mediumblue\">var</span> fruits = [<span style=\"color:brown\">\"Banana\"</span>, <span style=\"color:brown\">\"Orange\"</span>, <span style=\"color:brown\">\"Apple\"</span>, <span style=\"color:brown\">\"Mango\"</span>];<br>\n<span style=\"color:mediumblue\">var</span> a = fruits.<span style=\"color:black\">indexOf</span>(<span style=\"color:brown\">\"Apple\"</span>);<span style=\"color:red\">\n</span> </span></div>\n<p>The result of <em>a</em> will be:</p>\n<div class=\"w3-code notranslate\">\n2\n</div>\n<p>Meaning that \"Apple\" is located at position 2 in the array.</p>\n\n"
              }
            }, {
              "title": "isArray()",
              "descHtml": "Checks whether an object is an array",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\n Array.isArray(obj)",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:23%\">Parameter</th>\n <th>Description</th> </tr> \n <tr>\n <td><em>obj</em></td>\n <td>Required. The object to be tested</td>\n </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Check whether an object is an array:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\"><span style=\"color:red\">\n</span> <span style=\"color:mediumblue\">function</span> myFunction() {<br>&nbsp;&nbsp;&nbsp; <span style=\"color:mediumblue\">var</span> fruits = [<span style=\"color:brown\">\"Banana\"</span>, <span style=\"color:brown\">\"Orange\"</span>, <span style=\"color:brown\">\"Apple\"</span>, <span style=\"color:brown\">\"Mango\"</span>];<br>&nbsp;&nbsp;&nbsp; <span style=\"color:mediumblue\">var</span> x = document.<span style=\"color:black\">getElementById</span>(<span style=\"color:brown\">\"demo\"</span>);<br>&nbsp;&nbsp;&nbsp; x.<span style=\"color:black\">innerHTML</span> = Array.<span style=\"color:black\">isArray</span>(fruits);<br>} </span></div>\n<p>The result will be:</p>\n<div class=\"w3-code notranslate\">\ntrue\n</div>\n\n"
              }
            }, {
              "title": "join()",
              "descHtml": "Joins all elements of an array into a string",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\narray.join(separator)",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:23%\">Parameter</th>\n <th>Description</th> </tr> \n <tr>\n <td><em>separator</em></td>\n <td>Optional. The separator to be used. If omitted, the elements are separated with a comma</td>\n </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Join the elements of an array into a string:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\n<span style=\"color:mediumblue\">var</span> fruits = [<span style=\"color:brown\">\"Banana\"</span>, <span style=\"color:brown\">\"Orange\"</span>, <span style=\"color:brown\">\"Apple\"</span>, <span style=\"color:brown\">\"Mango\"</span>];<br>\n<span style=\"color:mediumblue\">var</span> energy = fruits.<span style=\"color:black\">join</span>();<span style=\"color:red\">\n</span> </span></div>\n<p>The result of <em>energy</em> will be:</p>\n<div class=\"w3-code notranslate\">\nBanana,Orange,Apple,Mango\n</div>\n\n"
              }
            }, {
              "title": "lastIndexOf()",
              "descHtml": "Search the array for an element, starting at the end, and returns its position",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\narray.lastIndexOf(item, start)",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:23%\">Parameter</th>\n <th>Description</th> \n </tr> \n <tr>\n <td><em>item</em></td>\n <td>Required. The item to search for</td>\n </tr>\n <tr>\n <td><em>start</em></td>\n <td>Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the beginning</td>\n </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Search an array for the item \"Apple\":</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\n<span style=\"color:mediumblue\">var</span> fruits = [<span style=\"color:brown\">\"Banana\"</span>, <span style=\"color:brown\">\"Orange\"</span>, <span style=\"color:brown\">\"Apple\"</span>, <span style=\"color:brown\">\"Mango\"</span>];<br>\n<span style=\"color:mediumblue\">var</span> a = fruits.<span style=\"color:black\">lastIndexOf</span>(<span style=\"color:brown\">\"Apple\"</span>);<span style=\"color:red\">\n</span> </span></div>\n<p>The result of <em>a</em> will be:</p>\n<div class=\"w3-code notranslate\">\n2\n</div>\n<p>Meaning that \"Apple\" is located at position 2 in the array.</p>\n\n"
              }
            }, {
              "title": "map()",
              "descHtml": "Creates a new array with the result of calling a function for each array element",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\narray.map(function(currentValue, index, arr), thisValue)",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:25%\">Parameter</th>\n <th>Description</th>\n </tr> \n <tr>\n <td><em>function(currentValue, index, arr)</em></td>\n <td>Required. A function to be run for each element in the array.<br>Function arguments:<table class=\"w3-table-all notranslate\"> \n <tbody><tr>\n <th style=\"width:25%\">Argument</th>\n <th>Description</th>\n </tr> \n <tr>\n <td><em>currentValue</em></td>\n <td>Required. The value of the current element</td>\n </tr>\n <tr>\n <td><em>index</em></td>\n <td>Optional. The array index of the current element</td>\n </tr>\n <tr>\n <td><em>arr</em></td>\n <td>Optional. The array object the current element belongs to</td>\n </tr>\n</tbody></table>\n\n </td>\n </tr>\n <tr>\n <td><em>thisValue</em></td>\n <td>Optional. A value to be passed to the function to be used as its \"this\" value.<br>If this parameter is empty, the value \"undefined\" will be passed as its \"this\" value</td>\n </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Return an array with the square root of all the values in the original array:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\"><span style=\"color:red\">\n</span> <span style=\"color:mediumblue\">var</span> numbers = [<span style=\"color:red\">4</span>, <span style=\"color:red\">9</span>, <span style=\"color:red\">16</span>, <span style=\"color:red\">25</span>];<br><br><span style=\"color:mediumblue\">function</span> myFunction() {<br>&nbsp;&nbsp;&nbsp; x = document.<span style=\"color:black\">getElementById</span>(<span style=\"color:brown\">\"demo\"</span>)<br>&nbsp;&nbsp;&nbsp; x.<span style=\"color:black\">innerHTML</span> = numbers.<span style=\"color:black\">map</span>(Math.<span style=\"color:black\">sqrt</span>);<br>} </span></div>\n<p>The result will be:</p>\n<div class=\"w3-code notranslate\">\n 2,3,4,5</div>\n\n"
              }
            }, {
              "title": "pop()",
              "descHtml": "Removes the last element of an array, and returns that element",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\narray.pop()",
                "parameters": "",
                "example": "\n<h3>Example</h3>\n<p>Remove the last element of an array:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\n<span style=\"color:mediumblue\">var</span> fruits = [<span style=\"color:brown\">\"Banana\"</span>, <span style=\"color:brown\">\"Orange\"</span>, <span style=\"color:brown\">\"Apple\"</span>, <span style=\"color:brown\">\"Mango\"</span>];<br>\nfruits.<span style=\"color:black\">pop</span>();<span style=\"color:red\">\n</span> </span></div>\n<p>The result of <em>fruits</em> will be:</p>\n<div class=\"w3-code notranslate\">\nBanana,Orange,Apple<br>\n</div>\n\n"
              }
            }, {
              "title": "push()",
              "descHtml": "Adds new elements to the end of an array, and returns the new length",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\narray.push(item1, item2, ..., itemX)",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:26%\">Parameter</th>\n <th>Description</th>\n </tr> \n <tr>\n <td><em>item1</em>, <em>item2</em>, ..., <em>itemX</em></td>\n <td>Required. The item(s) to add to the array</td>\n </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Add a new item to an array:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\n<span style=\"color:mediumblue\">var</span> fruits = [<span style=\"color:brown\">\"Banana\"</span>, <span style=\"color:brown\">\"Orange\"</span>, <span style=\"color:brown\">\"Apple\"</span>, <span style=\"color:brown\">\"Mango\"</span>];<br>\nfruits.<span style=\"color:black\">push</span>(<span style=\"color:brown\">\"Kiwi\"</span>); </span></div>\n<p>The result of <em>fruits</em> will be:</p>\n<div class=\"w3-code notranslate\">\nBanana,Orange,Apple,Mango,Kiwi</div>\n\n"
              }
            }, {
              "title": "reduce()",
              "descHtml": "Reduce the values of an array to a single value (going left-to-right)",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\narray.reduce(function(total, currentValue, currentIndex, arr), initialValue)",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:25%\">Parameter</th>\n <th>Description</th>\n </tr> \n <tr>\n <td><em>function(total,currentValue, index,arr)</em></td>\n <td>Required. A function to be run for each element in the array.<br>Function arguments:<table class=\"w3-table-all notranslate\"> \n <tbody><tr>\n <th style=\"width:25%\">Argument</th>\n <th>Description</th>\n </tr> \n <tr>\n <td><em>total</em></td>\n <td>Required. The <em>initialValue</em>, or the previously returned value of the function</td>\n </tr>\n <tr>\n <td><em>currentValue</em></td>\n <td>Required. The value of the current element</td>\n </tr>\n <tr>\n <td><em>currentIndex</em></td>\n <td>Optional. The array index of the current element</td>\n </tr>\n <tr>\n <td><em>arr</em></td>\n <td>Optional. The array object the current element belongs to</td>\n </tr>\n</tbody></table>\n\n </td>\n </tr>\n <tr>\n <td><em>initialValue</em></td>\n <td>Optional. A value to be passed to the function as the initial value</td>\n </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Get the sum of the numbers in the array:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\"><span style=\"color:red\">\n</span> <span style=\"color:mediumblue\">var</span> numbers = [<span style=\"color:red\">65</span>, <span style=\"color:red\">44</span>, <span style=\"color:red\">12</span>, <span style=\"color:red\">4</span>];<br><br><span style=\"color:mediumblue\">function</span> getSum(total, num) {<br>&nbsp;&nbsp;&nbsp; <span style=\"color:mediumblue\">return</span> total + num;<br>}<br><span style=\"color:mediumblue\">function</span> myFunction(item) {<br>&nbsp;&nbsp;&nbsp; document.<span style=\"color:black\">getElementById</span>(<span style=\"color:brown\">\"demo\"</span>).<span style=\"color:black\">innerHTML</span> = numbers.<span style=\"color:black\">reduce</span>(getSum);<br>} </span></div>\n<p>The result will be:</p>\n<div class=\"w3-code notranslate\">\n 125</div>\n\n"
              }
            }, {
              "title": "reduceRight()",
              "descHtml": "Reduce the values of an array to a single value (going right-to-left)",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\narray.reduceRight(function(total, currentValue, currentIndex, arr), initialValue)",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:25%\">Parameter</th>\n <th>Description</th>\n </tr> \n <tr>\n <td><em>function(total, currentValue, index, arr)</em></td>\n <td>Required. A function to be run for each element in the array.<br>Function arguments:<table class=\"w3-table-all notranslate\"> \n <tbody><tr>\n <th style=\"width:25%\">Argument</th>\n <th>Description</th>\n </tr> \n <tr>\n <td><em>total</em></td>\n <td>Required. The <em>initialValue</em>, or the previously returned value of the function</td>\n </tr>\n <tr>\n <td><em>currentValue</em></td>\n <td>Required. The value of the current element</td>\n </tr>\n <tr>\n <td><em>currentIndex</em></td>\n <td>Optional. The array index of the current element</td>\n </tr>\n <tr>\n <td><em>arr</em></td>\n <td>Optional. The array object the current element belongs to</td>\n </tr>\n</tbody></table>\n\n </td>\n </tr>\n <tr>\n <td><em>initialValue</em></td>\n <td>Optional. A value to be passed to the function as the initial value</td>\n </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Get the sum of the numbers in the array:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\"><span style=\"color:red\">\n</span> <span style=\"color:mediumblue\">var</span> numbers = [<span style=\"color:red\">65</span>, <span style=\"color:red\">44</span>, <span style=\"color:red\">12</span>, <span style=\"color:red\">4</span>];<br><br><span style=\"color:mediumblue\">function</span> getSum(total, num) {<br>&nbsp;&nbsp;&nbsp; <span style=\"color:mediumblue\">return</span> total + num;<br>}<br><span style=\"color:mediumblue\">function</span> myFunction(item) {<br>&nbsp;&nbsp;&nbsp; document.<span style=\"color:black\">getElementById</span>(<span style=\"color:brown\">\"demo\"</span>).<span style=\"color:black\">innerHTML</span> = numbers.<span style=\"color:black\">reduceRight</span>(getSum);<br>} </span></div>\n<p>The result will be:</p>\n<div class=\"w3-code notranslate\">\n 125</div>\n\n"
              }
            }, {
              "title": "reverse()",
              "descHtml": "Reverses the order of the elements in an array",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\narray.reverse()",
                "parameters": "",
                "example": "\n<h3>Example</h3>\n<p>Reverse the order of the elements in an array:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\n<span style=\"color:mediumblue\">var</span> fruits = [<span style=\"color:brown\">\"Banana\"</span>, <span style=\"color:brown\">\"Orange\"</span>, <span style=\"color:brown\">\"Apple\"</span>, <span style=\"color:brown\">\"Mango\"</span>];<br>\nfruits.<span style=\"color:black\">reverse</span>();<span style=\"color:red\">\n</span> </span></div>\n<p>The result of <em>fruits</em> will be:</p>\n<div class=\"w3-code notranslate\">\nMango,Apple,Orange,Banana</div>\n\n"
              }
            }, {
              "title": "shift()",
              "descHtml": "Removes the first element of an array, and returns that element",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\narray.shift()",
                "parameters": "",
                "example": "\n<h3>Example</h3>\n<p>Remove the first item of an array:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\n<span style=\"color:mediumblue\">var</span> fruits = [<span style=\"color:brown\">\"Banana\"</span>, <span style=\"color:brown\">\"Orange\"</span>, <span style=\"color:brown\">\"Apple\"</span>, <span style=\"color:brown\">\"Mango\"</span>];<br>\nfruits.<span style=\"color:black\">shift</span>(); </span></div>\n<p>The result of <em>fruits</em> will be:</p>\n<div class=\"w3-code notranslate\">\nOrange,Apple,Mango\n</div>\n\n"
              }
            }, {
              "title": "slice()",
              "descHtml": "Selects a part of an array, and returns the new array",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\narray.slice(start, end)",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:15%\">Parameter</th>\n <th>Description</th> </tr> \n <tr>\n <td><em>start</em></td>\n <td>Optional. An integer that specifies where to start the selection (The first element has an index of 0). Use negative numbers to select from the end of an array. If omitted, it acts like \"0\"</td>\n </tr>\n <tr>\n <td><em>end</em></td>\n <td>Optional. An integer that specifies where to end the selection. If omitted, all elements from the start position and to the end of the array will be selected. Use negative numbers to select from the end of an array</td>\n </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Select elements from an array:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\n<span style=\"color:mediumblue\">var</span> fruits = [<span style=\"color:brown\">\"Banana\"</span>, <span style=\"color:brown\">\"Orange\"</span>, <span style=\"color:brown\">\"Lemon\"</span>, <span style=\"color:brown\">\"Apple\"</span>, <span style=\"color:brown\">\"Mango\"</span>];<br>\n<span style=\"color:mediumblue\">var</span> citrus = fruits.<span style=\"color:black\">slice</span>(<span style=\"color:red\">1</span>, <span style=\"color:red\">3</span>);<span style=\"color:red\">\n</span> </span></div>\n<p>The result of <em>citrus</em> will be:</p>\n<div class=\"w3-code notranslate\">\nOrange,Lemon</div>\n\n"
              }
            }, {
              "title": "some()",
              "descHtml": "Checks if any of the elements in an array pass a test",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\narray.some(function(currentValue, index, arr), thisValue)",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:25%\">Parameter</th>\n <th>Description</th>\n </tr> \n <tr>\n <td><em>function(currentValue, index, arr)</em></td>\n <td>Required. A function to be run for each element in the array.<br>Function arguments:<table class=\"w3-table-all notranslate\"> \n <tbody><tr>\n <th style=\"width:25%\">Argument</th>\n <th>Description</th>\n </tr> \n <tr>\n <td><em>currentValue</em></td>\n <td>Required. The value of the current element</td>\n </tr>\n <tr>\n <td><em>index</em></td>\n <td>Optional. The array index of the current element</td>\n </tr>\n <tr>\n <td><em>arr</em></td>\n <td>Optional. The array object the current element belongs to</td>\n </tr>\n</tbody></table>\n\n </td>\n </tr>\n <tr>\n <td><em>thisValue</em></td>\n <td>Optional. A value to be passed to the function to be used as its \"this\" value.<br>If this parameter is empty, the value \"undefined\" will be passed as its \"this\" value</td>\n </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Check if any values in the <em>ages</em> array are 18 or over:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\"><span style=\"color:red\">\n</span> <span style=\"color:mediumblue\">var</span> ages = [<span style=\"color:red\">3</span>, <span style=\"color:red\">10</span>, <span style=\"color:red\">18</span>, <span style=\"color:red\">20</span>];<br><br><span style=\"color:mediumblue\">function</span> checkAdult(age) {<br>&nbsp;&nbsp;&nbsp; <span style=\"color:mediumblue\">return</span> age &gt;= <span style=\"color:red\">18</span>;<br>}<br><br><span style=\"color:mediumblue\">function</span> myFunction() {<br>&nbsp;&nbsp;&nbsp; document.<span style=\"color:black\">getElementById</span>(<span style=\"color:brown\">\"demo\"</span>).<span style=\"color:black\">innerHTML</span> = ages.<span style=\"color:black\">some</span>(checkAdult);<br>} </span></div>\n<p>The result will be:</p>\n<div class=\"w3-code notranslate\">\n true</div>\n\n"
              }
            }, {
              "title": "sort()",
              "descHtml": "Sorts the elements of an array",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\narray.sort(compareFunction)",
                "parameters": "<table> \n<tbody><tr>\n<th style=\"width:23%\">Parameter</th>\n<th>Description</th> </tr> \n<tr>\n<td><em>compareFunction</em></td>\n<td>\nOptional. A function that defines an alternative sort order. The function should return a negative, zero, or positive value, depending on the \narguments, like:\n<ul>\n <li>function(a, b){return a-b}</li>\n</ul>\n <p>When the sort() method compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.</p>\n<p><strong>Example:</strong></p>\n<p>When comparing 40 and 100, the sort() method calls the compare \nfunction(40,100).</p>\n<p>The function calculates 40-100, and returns -60 (a negative value).</p>\nThe sort function will sort 40 as a value lower than 100.\n </td>\n</tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Sort an array:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\n<span style=\"color:mediumblue\">var</span> fruits = [<span style=\"color:brown\">\"Banana\"</span>, <span style=\"color:brown\">\"Orange\"</span>, <span style=\"color:brown\">\"Apple\"</span>, <span style=\"color:brown\">\"Mango\"</span>];<br>\nfruits.<span style=\"color:black\">sort</span>();<span style=\"color:red\">\n</span> </span></div>\n<p>The result of <em>fruits</em> will be:</p>\n<div class=\"w3-code notranslate\">\nApple,Banana,Mango,Orange</div>\n\n"
              }
            }, {
              "title": "splice()",
              "descHtml": "Adds/Removes elements from an array",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\narray.splice(index, howmany, item1, ....., itemX)",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:25%\">Parameter</th>\n <th>Description</th>\n </tr> \n <tr>\n <td><em>index</em></td>\n <td>Required. An integer that specifies at what position to add/remove items, Use negative values to specify the position from the end of the array</td>\n </tr>\n <tr>\n <td><em>howmany</em></td>\n <td>Optional. The number of items to be removed. If set to 0, no items will be removed</td>\n </tr>\n <tr>\n <td><em>item1</em>, ..., <em>itemX</em></td>\n <td>Optional. The new item(s) to be added to the array</td>\n </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Add items to the array:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\n<span style=\"color:mediumblue\">var</span> fruits = [<span style=\"color:brown\">\"Banana\"</span>, <span style=\"color:brown\">\"Orange\"</span>, <span style=\"color:brown\">\"Apple\"</span>, <span style=\"color:brown\">\"Mango\"</span>];<br>\nfruits.<span style=\"color:black\">splice</span>(<span style=\"color:red\">2</span>, <span style=\"color:red\">0</span>, <span style=\"color:brown\">\"Lemon\"</span>, <span style=\"color:brown\">\"Kiwi\"</span>);<span style=\"color:red\">\n</span> </span></div>\n<p>The result of <em>fruits</em> will be:</p>\n<div class=\"w3-code notranslate\">\nBanana,Orange,Lemon,Kiwi,Apple,Mango</div>\n\n"
              }
            }, {
              "title": "toString()",
              "descHtml": "Converts an array to a string, and returns the result",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\narray.toString()",
                "parameters": "",
                "example": "\n<h3>Example</h3>\n<p>Convert an array to a string:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\n<span style=\"color:mediumblue\">var</span> fruits = [<span style=\"color:brown\">\"Banana\"</span>, <span style=\"color:brown\">\"Orange\"</span>, <span style=\"color:brown\">\"Apple\"</span>, <span style=\"color:brown\">\"Mango\"</span>];<br>\nfruits.<span style=\"color:black\">toString</span>();<span style=\"color:red\">\n</span> </span></div>\n<p> \nThe result of <em>fruits</em> will be:</p>\n<div class=\"w3-code notranslate\">\nBanana,Orange,Apple,Mango</div>\n\n"
              }
            }, {
              "title": "unshift()",
              "descHtml": "Adds new elements to the beginning of an array, and returns the new length",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\narray.unshift(item1, item2, ..., itemX)",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:25%\">Parameter</th>\n <th>Description</th> </tr> \n <tr>\n <td><em>item1</em>,<em> item2</em>, ..., <em>itemX</em></td>\n <td>Required. The item(s) to add to the beginning of the array</td>\n </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Add new items to the beginning of an array:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\n<span style=\"color:mediumblue\">var</span> fruits = [<span style=\"color:brown\">\"Banana\"</span>, <span style=\"color:brown\">\"Orange\"</span>, <span style=\"color:brown\">\"Apple\"</span>, <span style=\"color:brown\">\"Mango\"</span>];<br>\nfruits.<span style=\"color:black\">unshift</span>(<span style=\"color:brown\">\"Lemon\"</span>,<span style=\"color:brown\">\"Pineapple\"</span>);<span style=\"color:red\">\n</span> </span></div>\n<p>The result of <em>fruits</em> will be:</p>\n<div class=\"w3-code notranslate\">\nLemon,Pineapple,Banana,Orange,Apple,Mango</div>\n\n"
              }
            }, {
              "title": "valueOf()",
              "descHtml": "Returns the primitive value of an array",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\narray.valueOf()",
                "parameters": "",
                "example": "\n<h3>Example</h3>\n <p>valueOf() is the default method of the array object.</p>\n <div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\n<span style=\"color:mediumblue\">var</span> fruits = [<span style=\"color:brown\">\"Banana\"</span>, <span style=\"color:brown\">\"Orange\"</span>, <span style=\"color:brown\">\"Apple\"</span>, <span style=\"color:brown\">\"Mango\"</span>];<br>\n<span style=\"color:mediumblue\">var</span> v = fruits.<span style=\"color:black\">valueOf</span>();<span style=\"color:red\">\n</span> </span></div>\n <p>&nbsp;<em>fruits.valueOf()</em> will return the same as <em>fruits</em></p>\n <p>The result of <em>v</em> will be:</p>\n<div class=\"w3-code notranslate\">\nBanana,Orange,Apple,Mango</div>\n\n"
              }
            }]
          },
          {
            title: "Error",
            descHtml: "The Error object provides error information when an error occurs",
            "info": {
              "syntax": "",
              "parameters": "",
              "example": "\n<h3>Example</h3>\n<p>In this example we have written \"alert\" as \"<strong>adddlert</strong>\" to \ndeliberately produce an error.</p>\n<p>Return the error name and a description of the \nerror:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\"><span style=\"color:red\">\n</span> <span style=\"color:mediumblue\">try</span> {<br>&nbsp;&nbsp;&nbsp; adddlert(<span style=\"color:brown\">\"Welcome\"</span>);<br>}<br><span style=\"color:mediumblue\">catch</span>(err) {<br>&nbsp;&nbsp;&nbsp; document.<span style=\"color:black\">getElementById</span>(<span style=\"color:brown\">\"demo\"</span>).<span style=\"color:black\">innerHTML</span> = <br>&nbsp;&nbsp;&nbsp; err.<span style=\"color:black\">name</span> + <span style=\"color:brown\">\"&lt;br&gt;\"</span> + err.<span style=\"color:black\">message</span>;<br>} </span></div>\n\n"
            }
          },
          {
            title: "Math",
            descHtml: "Care este rolul operatorilor in javascript?",
            el: [{
              "title": "E",
              "descHtml": "Returns Euler's number (approx. 2.718)",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2
            }, {
              "title": "LN2",
              "descHtml": "Returns the natural logarithm of 2 (approx. 0.693)",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2
            }, {
              "title": "LN10",
              "descHtml": "Returns the natural logarithm of 10 (approx. 2.302)",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2
            }, {
              "title": "LOG2E",
              "descHtml": "Returns the base-2 logarithm of E (approx. 1.442)",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2
            }, {
              "title": "LOG10E",
              "descHtml": "Returns the base-10 logarithm of E (approx. 0.434)",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2
            }, {
              "title": "PI",
              "descHtml": "Returns PI (approx. 3.14)",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2
            }, {
              "title": "SQRT1_2",
              "descHtml": "Returns the square root of 1/2 (approx. 0.707)",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2
            }, {
              "title": "SQRT2",
              "descHtml": "Returns the square root of 2 (approx. 1.414)",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2
            }, {
              "title": "abs(x)",
              "descHtml": "Returns the absolute value of x",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\nMath.abs(x)",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:20%\">Parameter</th>\n <th>Description</th> </tr> \n <tr>\n <td><em>x</em></td>\n <td>Required. A number</td>\n </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Return the absolute value of a number:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\nMath.<span style=\"color:black\">abs</span>(-<span style=\"color:red\">7.25</span>);<span style=\"color:red\">\n</span> </span></div>\n<p>The result will be:</p>\n<div class=\"w3-code notranslate\">\n7.25\n</div>\n\n"
              }
            }, {
              "title": "acos(x)",
              "descHtml": "Returns the arccosine of x, in radians",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\nMath.acos(x)",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:23%\">Parameter</th>\n <th>Description</th> </tr> \n <tr>\n <td><em>x</em></td>\n <td>Required. A number</td>\n </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Return the arccosine of a number:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\nMath.<span style=\"color:black\">acos</span>(<span style=\"color:red\">0.5</span>);<span style=\"color:red\">\n</span> </span></div>\n<p>The result will be:</p>\n<div class=\"w3-code notranslate\">\n<script>\ndocument.write(Math.acos(0.5));"
              }
            }, {
              "title": "asin(x)",
              "descHtml": "Returns the arcsine of x, in radians",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\nMath.asin(x)",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:23%\">Parameter</th>\n <th>Description</th> </tr> \n <tr>\n <td><em>x</em></td>\n <td>Required. A number</td>\n </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Return the arcsine of a number:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\nMath.<span style=\"color:black\">asin</span>(<span style=\"color:red\">0.5</span>);<span style=\"color:red\">\n</span> </span></div>\n<p>The result will be:</p>\n<div class=\"w3-code notranslate\">\n<script>\ndocument.write(Math.asin(0.5));"
              }
            }, {
              "title": "atan(x)",
              "descHtml": "Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\nMath.atan(x)\n",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:23%\">Parameter</th>\n <th>Description</th> </tr> \n <tr>\n <td><em>x</em></td>\n <td>Required. A number</td>\n </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Return the arctangent of a specified number:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\nMath.<span style=\"color:black\">atan</span>(<span style=\"color:red\">2</span>);<span style=\"color:red\">\n</span> </span></div>\n<p>The result will be:</p>\n<div class=\"w3-code notranslate\">\n1.1071487177940904</div>\n\n"
              }
            }, {
              "title": "atan2(y, x)",
              "descHtml": "Returns the arctangent of the quotient of its arguments",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\nMath.atan2(y, x)\n",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:23%\">Parameter</th>\n <th>Description</th> </tr> \n <tr>\n <td><em>y</em></td>\n <td>Required. A number representing the y coordinate</td>\n </tr>\n <tr>\n <td><em>x</em></td>\n <td>Required. A number representing the x coordinate</td>\n </tr>\n</tbody></table>",
                "example": "\n<h3>Example - atan2(y,x)</h3>\n<p>Assume you had a point with the (x,y) coordinates of (4,8), you could \ncalculate the angle in radians between that point and the positive X axis as \nfollows:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\nMath.<span style=\"color:black\">atan2</span>(<span style=\"color:red\">8</span>, <span style=\"color:red\">4</span>);<span style=\"color:red\">\n</span> </span></div>\n<p>The output of the code above will be:</p>\n<div class=\"w3-code notranslate\">\n1.1071487177940904</div>\n<p>\n\n</p>"
              }
            }, {
              "title": "ceil(x)",
              "descHtml": "Returns x, rounded upwards to the nearest integer",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\nMath.ceil(x)",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:23%\">Parameter</th>\n <th>Description</th> </tr> \n <tr>\n <td><em>x</em></td>\n <td>Required. The number you want to round</td>\n </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Round a number upward to its nearest integer:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\nMath.<span style=\"color:black\">ceil</span>(<span style=\"color:red\">1.4</span>)<span style=\"color:red\">\n</span> </span></div>\n<p> \nThe result will be:</p>\n<div class=\"w3-code notranslate\">\n2\n</div>\n\n"
              }
            }, {
              "title": "cos(x)",
              "descHtml": "Returns the cosine of x (x is in radians)",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\nMath.cos(x)",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:23%\">Parameter</th>\n <th>Description</th> </tr> \n <tr>\n <td><em>x</em></td>\n <td>Required. A number</td>\n </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Return the cosine of a number:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\nMath.<span style=\"color:black\">cos</span>(<span style=\"color:red\">3</span>);<span style=\"color:red\">\n</span> </span></div>\n<p>The output of the code above will be:</p>\n<div class=\"w3-code notranslate\">\n-0.9899924966004454\n</div>\n\n"
              }
            }, {
              "title": "exp(x)",
              "descHtml": "Returns the value of Ex",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\nMath.exp(x)",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:23%\">Parameter</th>\n <th>Description</th> </tr> \n <tr>\n <td><em>x</em></td>\n <td>Required. A number</td>\n </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Return E<sup>x</sup>, where x is 1</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\nMath.<span style=\"color:black\">exp</span>(<span style=\"color:red\">1</span>);<span style=\"color:red\">\n</span> </span></div>\n<p>The result will be:</p>\n<div class=\"w3-code notranslate\">\n2.718281828459045\n</div>\n\n"
              }
            }, {
              "title": "floor(x)",
              "descHtml": "Returns x, rounded downwards to the nearest integer",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\nMath.floor(x)",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:23%\">Parameter</th>\n <th>Description</th> </tr> \n <tr>\n <td><em>x</em></td>\n <td>Required. The number you want to round</td>\n </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Round a number downward to its nearest integer:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\nMath.<span style=\"color:black\">floor</span>(<span style=\"color:red\">1.6</span>);<span style=\"color:red\">\n</span> </span></div>\n<p>The output of the code above will be:</p>\n<div class=\"w3-code notranslate\">\n1\n</div>\n\n"
              }
            }, {
              "title": "log(x)",
              "descHtml": "Returns the natural logarithm (base E) of x",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\nMath.log(x)",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:23%\">Parameter</th>\n <th>Description</th> </tr> \n <tr>\n <td><em>x</em></td>\n <td>Required. A number</td>\n </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Return the natural logarithm of the number \"2\":</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\nMath.<span style=\"color:black\">log</span>(<span style=\"color:red\">2</span>);<span style=\"color:red\">\n</span> </span></div>\n<p>The result will be:</p>\n<div class=\"w3-code notranslate\">\n0.6931471805599453<br>\n</div>\n\n"
              }
            }, {
              "title": "max(x, y, z, ..., n)",
              "descHtml": "Returns the number with the highest value",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\nMath.max(n1, n2, n3, ..., nX)",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:23%\">Parameter</th>\n <th>Description</th> </tr> \n <tr>\n <td><em>n1</em>,<em> n2</em>,<em> n3</em>, ..., nX</td>\n <td>Optional. One or more numbers to compare</td>\n </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Return the number with the highest value:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\nMath.<span style=\"color:black\">max</span>(<span style=\"color:red\">5</span>, <span style=\"color:red\">10</span>);<span style=\"color:red\">\n</span> </span></div>\n<p>The result will be:</p>\n<div class=\"w3-code notranslate\">\n10</div>\n\n"
              }
            }, {
              "title": "min(x, y, z, ..., n)",
              "descHtml": "Returns the number with the lowest value",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\nMath.min(n1, n2, n3, ..., nX)",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:22%\">Parameter</th>\n <th>Description</th> </tr> \n <tr>\n <td><em>n1</em>,<em> n2</em>,<em> n3</em>, ..., nX</td>\n <td>Optional. One or more numbers to compare</td> </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Return the number with the lowest value:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\nMath.<span style=\"color:black\">min</span>(<span style=\"color:red\">5</span>, <span style=\"color:red\">10</span>);<span style=\"color:red\">\n</span> </span></div>\n<p>The result will be:</p>\n<div class=\"w3-code notranslate\">\n5</div>\n\n"
              }
            }, {
              "title": "pow(x, y)",
              "descHtml": "Returns the value of x to the power of y",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\nMath.pow(x, y)",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:23%\">Parameter</th>\n <th>Description</th> </tr> \n <tr>\n <td><em>x</em></td>\n <td>Required. The base</td>\n </tr>\n <tr>\n <td><em>y</em></td>\n <td>Required. The exponent</td>\n </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Return the value of the number 4 to the power of 3 (4*4*4):</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\nMath.<span style=\"color:black\">pow</span>(<span style=\"color:red\">4</span>, <span style=\"color:red\">3</span>);<span style=\"color:red\">\n</span> </span></div>\n<p>The result will be:</p>\n<div class=\"w3-code notranslate\">\n64</div>\n\n"
              }
            }, {
              "title": "random()",
              "descHtml": "Returns a random number between 0 and 1",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\nMath.random()",
                "parameters": "",
                "example": "\n<h3>Example</h3>\n<p>Return a random number between 0 (inclusive) and 1 (exclusive):</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\nMath.<span style=\"color:black\">random</span>();<span style=\"color:red\">\n</span> </span></div>\n<p>The result could be:</p>\n<div class=\"w3-code notranslate\">\n<script>\ndocument.write(Math.random());"
              }
            }, {
              "title": "round(x)",
              "descHtml": "Rounds x to the nearest integer",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\nMath.round(x)",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:23%\">Parameter</th>\n <th>Description</th> </tr> \n <tr>\n <td><em>x</em></td>\n <td>Required. The number to be rounded</td>\n </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Round a number to the nearest integer:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\nMath.<span style=\"color:black\">round</span>(<span style=\"color:red\">2.5</span>);<span style=\"color:red\">\n</span> </span></div>\n<p>The result will be:</p>\n<div class=\"w3-code notranslate\">\n3\n</div>\n\n"
              }
            }, {
              "title": "sin(x)",
              "descHtml": "Returns the sine of x (x is in radians)",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\nMath.sin(x)",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:23%\">Parameter</th>\n <th>Description</th>\n </tr> \n <tr>\n <td><em>x</em></td>\n <td>Required. A number</td>\n </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Return the sine of a number:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\nMath.<span style=\"color:black\">sin</span>(<span style=\"color:red\">3</span>);<span style=\"color:red\">\n</span> </span></div>\n<p>The result will be:</p>\n<div class=\"w3-code notranslate\">\n0.1411200080598672\n</div>\n\n"
              }
            }, {
              "title": "sqrt(x)",
              "descHtml": "Returns the square root of x",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2
            }, {
              "title": "tan(x)",
              "descHtml": "Returns the tangent of an angle",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\nMath.sqrt(x)",
                "parameters": "<table> \n <tbody><tr>\n <th style=\"width:23%\">Parameter</th>\n <th>Description</th> </tr> \n <tr>\n <td><em>x</em></td>\n <td>Required. A number</td>\n </tr>\n</tbody></table>",
                "example": "\n<h3>Example</h3>\n<p>Return the square root of a number:</p>\n<div class=\"w3-code notranslate jsHigh\"><span style=\"color:black\">\nMath.<span style=\"color:black\">sqrt</span>(<span style=\"color:red\">9</span>);<span style=\"color:red\">\n</span> </span></div>\n<p>The result will be:</p>\n<div class=\"w3-code notranslate\">\n3<br>\n</div>\n\n"
              }
            }]
          },
          {
            title: "Global functions",
            descHtml: "It makes sense to call the list above global functions rather than global methods because the functions are called globally and not any objects.",
            ex: {
              files: ["global_functions.png"]
            },
            test: {
              desc: " ",
              col: 5
            },
            todo: ["One of the must used methods is: parseInt()"],
          },
          {
            title: "Regex",
            descHtml: "Library used ?",
            el: [{
              "title": "i",
              "descHtml": "Perform case-insensitive matching",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\n\nnew RegExp(\"regexp\", \"i\")\n\nor simply:\n\n/regexp/i\n",
                "parameters": "",
                "example": "\n<h3>Example</h3>\n<p>Do a case-insensitive search for \"w3schools\" in a string:</p>\n<div class=\"w3-code notranslate\">\nvar str = \"Visit W3Schools\";<br>\nvar patt1 = /w3schools/i;\n</div>\n<p>The <span class=\"marked\">marked</span> text below shows where the expression gets a match:</p>\n<div class=\"w3-code notranslate\">\nVisit <span class=\"marked\">W3Schools</span></div>\n\n"
              }
            }, {
              "title": "g",
              "descHtml": "Perform a global match (find all matches rather than stopping after the first match)",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\n\nnew RegExp(\"regexp\", \"g\")\n\nor simply:\n\n/regexp/g\n\n",
                "parameters": "",
                "example": "\n<h3>Example</h3>\n<p>Do a global search for \"is\":</p>\n<div class=\"w3-code notranslate\">\nvar str = \"Is this all there is?\";<br>\nvar patt1 = /is/g;\n</div>\n<p>The <span class=\"marked\">marked</span> text below shows where the expression gets a match:</p>\n<div class=\"w3-code notranslate\">\nIs th<span class=\"marked\">is</span> all there <span class=\"marked\">is</span>?</div>\n\n"
              }
            }, {
              "title": "m",
              "descHtml": "Perform multiline matching",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\n\nnew RegExp(\"regexp\", \"m\")\n\nor simply:\n\n/regexp/m",
                "parameters": "",
                "example": "\n<h3>Example</h3>\n<p>Do a multiline search for \"is\" at the beginning of each line in a string:</p>\n<div class=\"w3-code notranslate\">\n var str = \"\\nIs th\\nis it?\";<br>\nvar patt1 = /^is/m;\n</div>\n<p>The <span class=\"marked\">marked</span> text below shows where the expression gets a match:</p>\n<div class=\"w3-code notranslate\">\n <br>Is th<br><span class=\"marked\">is</span> it?</div>\n\n"
              }
            }, {
              "title": "[abc]",
              "descHtml": "Find any character between the brackets",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\nnew RegExp(\"[abc]\")\n\nor simply:\n\n/[abc]/\n\nnew RegExp(\"[abc]\", \"g\")\n\nor simply:\n\n /\\[abc]/g",
                "parameters": "",
                "example": "\n<h3>Example</h3>\n<p>Do a global search for the character \"h\" in a string:</p>\n<div class=\"w3-code notranslate\">\nvar str = \"Is this all there is?\";<br>\nvar patt1 = /[h]/g;\n</div>\n<p>The <span class=\"marked\">marked</span> text below shows where the expression gets a match:</p>\n<div class=\"w3-code notranslate\">\nIs t<span class=\"marked\">h</span>is all t<span class=\"marked\">h</span>ere is?\n</div>\n\n"
              }
            }, {
              "title": "[^abc]",
              "descHtml": "Find any character NOT between the brackets",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\nnew RegExp(\"[^xyz]\")\n\nor simply:\n\n/[^xyz]/\n\nnew RegExp(\"[^xyz]\", \"g\")\n\nor simply:\n\n /\\[^xyz]/g",
                "parameters": "",
                "example": "\n<h3>Example</h3>\n<p>Do a global search for characters that are NOT inside the brackets [h]:</p>\n<div class=\"w3-code notranslate\">\nvar str = \"Is this all there is?\";<br>\nvar patt1 = /[^h]/g;\n</div>\n<p>The <span class=\"marked\">marked</span> text below shows where the expression gets a match:</p>\n<div class=\"w3-code notranslate\">\n<span class=\"marked\">Is t</span>h<span class=\"marked\">is all t</span>h<span class=\"marked\">ere is?</span>\n</div>\n\n"
              }
            }, {
              "title": "[0-9]",
              "descHtml": "Find any character between the brackets (any digit)",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\nnew RegExp(\"[0-9]\")\n\nor simply:\n\n/[0-9]/\n\nnew RegExp(\"[0-9]\", \"g\")\n\nor simply:\n/\\[0-9]/g",
                "parameters": "",
                "example": "\n<h3>Example</h3>\n<p>Do a global search for the numbers 1, 2, 3 and 4 in a string:</p>\n<div class=\"w3-code notranslate\">\nvar str = \"123456789\";<br>\nvar patt1 = /[1-4]/g;\n</div>\n<p>The <span class=\"marked\">marked</span> text below shows where the expression gets a match:</p>\n<div class=\"w3-code notranslate\">\n <span class=\"marked\">1234</span>56789</div>\n\n"
              }
            }, {
              "title": "[^0-9]",
              "descHtml": "Find any character NOT between the brackets (any non-digit)",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": { "syntax": "\n\nnew RegExp(\"[^0-9]\")\n\nor simply:\n\n/[^0-9]/\n\nnew RegExp(\"[^0-9]\", \"g\")\n\nor simply:\n\n /\\[^0-9]/g", "parameters": "", "example": "\n<h3>Example</h3>\n<p>Do a global search for the numbers that are NOT 1 to 4 in a string:</p>\n<div class=\"w3-code notranslate\">\nvar str = \"123456789\";<br>\nvar patt1 = /[^1-4]/g;\n</div>\n<p>The <span class=\"marked\">marked</span> text below shows where the expression gets a match:</p>\n<div class=\"w3-code notranslate\">\n 1234<span class=\"marked\">56789</span></div>\n\n" }
            }, {
              "title": "(x|y)",
              "descHtml": "Find any of the alternatives specified",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\n\nnew RegExp(\"(x|y)\")\n\nor simply:\n\n /(x|y)/\n\nnew RegExp(\"(x|y)\", \"g\")\n\nor simply:\n\n /(x|y)/g",
                "parameters": "",
                "example": "\n<h3>Example</h3>\n<p>Do a global search to find any of the specified alternatives (red|green):</p>\n<div class=\"w3-code notranslate\">\nvar str = \"re, green, red, green, gren, gr, blue, yellow\";<br>var patt1 = /(red|green)/g;\n</div>\n<p>The <span class=\"marked\">marked</span> text below shows where the expression gets a match:</p>\n<div class=\"w3-code notranslate\">\n re, <span class=\"marked\">green, red, green,</span> gren, gr, blue, yellow</div>\n\n"
              }
            }, {
              "title": ".",
              "descHtml": "Find a single character, except newline or line terminator",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\n\nnew RegExp(\"regexp.\")\n\nor simply:\n\n/regexp./\n\n\nnew RegExp(\"regexp.\", \"g\")\n\nor simply:\n\n /regexp./g",
                "parameters": "",
                "example": "\n<h3>Example</h3>\n<p>Do a global search for \"h.t\" in a \nstring:</p>\n<div class=\"w3-code notranslate\">\nvar str = \"That's hot!\";<br>\nvar patt1 = /h.t/g;\n</div>\n<p>The <span class=\"marked\">marked</span> text below shows where the expression gets a match:</p>\n<div class=\"w3-code notranslate\">\nT<span class=\"marked\">hat</span>'s <span class=\"marked\">hot</span>!</div>\n\n"
              }
            }, {
              "title": "\\w",
              "descHtml": "Find a word character",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\nnew RegExp(\"\\\\w\")\n\nor simply:\n\n /\\w/\nnew RegExp(\"\\\\w\", \"g\")\n\nor simply:\n\n /\\w/g",
                "parameters": "",
                "example": "\n<h3>Example</h3>\n<p>Do a global search for word characters in a string:</p>\n<div class=\"w3-code notranslate\">\nvar str = \"Give 100%!\";<br>\nvar patt1 = /\\w/g;\n</div>\n<p>The <span class=\"marked\">marked</span> text below shows where the expression gets a match:</p>\n<div class=\"w3-code notranslate\">\n<span class=\"marked\">Give</span> <span class=\"marked\">100</span>%!\n</div>\n\n"
              }
            }, {
              "title": "\\W",
              "descHtml": "Find a non-word character",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\nnew RegExp(\"\\\\W\")\n\nor simply:\n\n /\\W/\nnew RegExp(\"\\\\W\", \"g\")\n\nor simply:\n\n /\\W/g",
                "parameters": "",
                "example": "\n<h3>Example</h3>\n<p>Do a global search for non-word characters in a string:</p>\n<div class=\"w3-code notranslate\">\nvar str = \"Give 100%!\";<br>\nvar patt1 = /\\W/g;\n</div>\n<p>The <span class=\"marked\">marked</span> text below shows where the expression gets a match:</p>\n<div class=\"w3-code notranslate\">\nGive 100<span class=\"marked\">%!</span>\n</div>\n\n"
              }
            }, {
              "title": "\\d",
              "descHtml": "Find a digit",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\nnew RegExp(\"\\\\d\")\n\nor simply:\n\n /\\d/\nnew RegExp(\"\\\\d\", \"g\")\n\nor simply:\n\n /\\d/g",
                "parameters": "",
                "example": "\n<h3>Example</h3>\n<p>Do a global search for digits:</p>\n<div class=\"w3-code notranslate\">\nvar str = \"Give 100%!\";<br>\nvar patt1 = /\\d/g;\n</div>\n<p>The <span class=\"marked\">marked</span> text below shows where the expression gets a match:</p>\n<div class=\"w3-code notranslate\">\nGive <span class=\"marked\">100</span>%!\n</div>\n\n"
              }
            }, {
              "title": "\\D",
              "descHtml": "Find a non-digit character",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\nnew RegExp(\"\\\\D\")\n\nor simply:\n\n /\\D/\nnew RegExp(\"\\\\D\", \"g\")\n\nor simply:\n\n /\\D/g",
                "parameters": "",
                "example": "\n<h3>Example</h3>\n<p>Do a global search for non-digit characters:</p>\n<div class=\"w3-code notranslate\">\nvar str = \"Give 100%!\";<br>\nvar patt1 = /\\D/g;\n</div>\n<p>The <span class=\"marked\">marked</span> text below shows where the expression gets a match:</p>\n<div class=\"w3-code notranslate\">\n<span class=\"marked\">Give </span>100<span class=\"marked\">%!</span>\n</div>\n\n"
              }
            }, {
              "title": "\\s",
              "descHtml": "Find a whitespace character",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\nnew RegExp(\"\\\\s\")\n\nor simply:\n\n /\\s/\nnew RegExp(\"\\\\s\", \"g\")\n\nor simply:\n\n /\\s/g",
                "parameters": "",
                "example": "\n<h3>Example</h3>\n<p>Do a global search for whitespace characters in a string:</p>\n<div class=\"w3-code notranslate\">\nvar str = \"Is this all there is?\";<br>\nvar patt1 = /\\s/g;\n</div>\n<p>All the <span class=\"marked\">spaces</span> in the text will get a match (four matches):</p>\n<div class=\"w3-code notranslate\">\nIs<span style=\"background-color:#e80000\"> </span>this<span style=\"background-color:#e80000\"> </span>all<span style=\"background-color:#e80000\"> </span>there<span style=\"background-color:#e80000\"> </span>is?\n</div>\n\n"
              }
            }, {
              "title": "\\S",
              "descHtml": "Find a non-whitespace character",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\nnew RegExp(\"\\\\S\")\n\nor simply:\n\n/\\S/\n\nnew RegExp(\"\\\\S\", \"g\")\n\nor simply:\n\n /\\S/g",
                "parameters": "",
                "example": "\n<h3>Example</h3>\n<p>Do a global search for non-whitespace characters in a string:</p>\n<div class=\"w3-code notranslate\">\nvar str = \"Is this all there is?\";<br>\nvar patt1 = /\\S/g;\n</div>\n<p>The <span class=\"marked\">marked</span> text below shows where the expression gets a match \n(matches everything except the whitespaces):</p>\n<div class=\"w3-code notranslate\">\n<span class=\"marked\">Is this all there is?</span>\n</div>\n\n"
              }
            }, {
              "title": "\\b",
              "descHtml": "Find a match at the beginning/end of a word",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\nnew RegExp(\"\\\\bregexp\")\n\nor simply:\n\n/\\bregexp/\n\n\nnew RegExp(\"\\\\bregexp\", \"g\")\n\nor simply:\n\n /\\bregexp/g",
                "parameters": "",
                "example": "\n<h3>Example</h3>\n<p>Do a global search for \"W3\" at the beginning \nor end of a word in a string:</p>\n<div class=\"w3-code notranslate\">\nvar str = \"Visit W3Schools\";<br>\nvar patt1 = /\\bW3/g;\n</div>\n<p>The <span class=\"marked\">marked</span> text below shows where the expression gets a match:</p>\n<div class=\"w3-code notranslate\">\nVisit <span class=\"marked\">W3</span>Schools\n</div>\n\n"
              }
            }, {
              "title": "\\B",
              "descHtml": "Find a match not at the beginning/end of a word",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\n\nnew RegExp(\"\\\\Bregexp\")\n\nor simply:\n\n/\\Bregexp/\n\nnew RegExp(\"\\\\Bregexp\", \"g\")\n\nor simply:\n\n /\\Bregexp/g",
                "parameters": "",
                "example": "\n<h3>Example</h3>\n<p>Do a global search for \"Schools\" NOT at the beginning \nor end of a word in a string:</p>\n<div class=\"w3-code notranslate\">\nvar str = \"Visit W3Schools\";<br>\nvar patt1 = /\\BSchool/g;\n</div>\n<p>The <span class=\"marked\">marked</span> text below shows where the expression gets a match:</p>\n<div class=\"w3-code notranslate\">\nVisit W3<span class=\"marked\">School</span>s\n</div>\n\n"
              }
            }, {
              "title": "\\0",
              "descHtml": "Find a NUL character",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\nnew RegExp(\"\\\\0\")\n\nor simply:\n\n /\\0/",
                "parameters": "",
                "example": "\n<h3>Example</h3>\n<p>Search for a NUL character in a string:</p>\n<div class=\"w3-code notranslate\">\nvar str = \"Visit W3Schools.\\0Learn Javascript.\";<br>var patt1 = /\\0/;\n</div>\n<p>The <span class=\"marked\">marked</span> text below shows where the expression gets a match:</p>\n<div class=\"w3-code notranslate\">\n Visit W3Schools.<span class=\"marked\">\\0</span>Learn Javascript.</div>\n\n"
              }
            }, {
              "title": "\\n",
              "descHtml": "Find a new line character",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\n\nnew RegExp(\"\\\\n\")\n\nor simply:\n\n/\\n/\n\n",
                "parameters": "",
                "example": "\n<h3>Example</h3>\n<p>Search for a newline character in a string:</p>\n<div class=\"w3-code notranslate\">\nvar str = \"Visit W3Schools.\\nLearn Javascript.\";<br>\nvar patt1 = /\\n/;\n</div>\n<p>The <span class=\"marked\">marked</span> text below shows where the expression gets a match:</p>\n<div class=\"w3-code notranslate\">\nVisit W3Schools.<span class=\"marked\">\\n</span>Learn Javascript.</div>\n\n"
              }
            }, {
              "title": "\\f",
              "descHtml": "Find a form feed character",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\nnew RegExp(\"\\\\f\")\n\nor simply:\n\n /\\f/",
                "parameters": "",
                "example": "\n<h3>Example</h3>\n<p>Search for a form feed character in a string:</p>\n<div class=\"w3-code notranslate\">\nvar str = \"Visit W3Schools.\\fLearn Javascript.\";<br>var patt1 = /\\f/;\n</div>\n<p>The <span class=\"marked\">marked</span> text below shows where the expression gets a match:</p>\n<div class=\"w3-code notranslate\">\n Visit W3Schools.<span class=\"marked\">\\f</span>Learn Javascript.</div>\n\n"
              }
            }, {
              "title": "\\r",
              "descHtml": "Find a carriage return character",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\nnew RegExp(\"\\\\r\")\n\nor simply:\n\n /\\r/",
                "parameters": "",
                "example": "\n<h3>Example</h3>\n<p>Search for a carriage return character in a string:</p>\n<div class=\"w3-code notranslate\">\nvar str = \"Visit W3Schools.\\rLearn Javascript.\";<br>var patt1 = /\\r/;\n</div>\n<p>The <span class=\"marked\">marked</span> text below shows where the expression gets a match:</p>\n<div class=\"w3-code notranslate\">\n Visit W3Schools.<span class=\"marked\">\\r</span>Learn Javascript.</div>\n\n"
              }
            }, {
              "title": "\\t",
              "descHtml": "Find a tab character",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\nnew RegExp(\"\\\\t\")\n\nor simply:\n\n /\\t/",
                "parameters": "",
                "example": "\n<h3>Example</h3>\n<p>Search for a tab character in a string:</p>\n<div class=\"w3-code notranslate\">\nvar str = \"Visit W3Schools.\\tLearn Javascript.\";<br>var patt1 = /\\t/;\n</div>\n<p>The <span class=\"marked\">marked</span> text below shows where the expression gets a match:</p>\n<div class=\"w3-code notranslate\">\n Visit W3Schools.<span class=\"marked\">\\t</span>Learn Javascript.</div>\n\n"
              }
            }, {
              "title": "\\v",
              "descHtml": "Find a vertical tab character",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\nnew RegExp(\"\\\\v\")\n\nor simply:\n\n /\\v/",
                "parameters": "",
                "example": "\n<h3>Example</h3>\n<p>Search for a vertical tab character in a string:</p>\n<div class=\"w3-code notranslate\">\nvar str = \"Visit W3Schools.\\vLearn Javascript.\";<br>var patt1 = /\\v/;\n</div>\n<p>The <span class=\"marked\">marked</span> text below shows where the expression gets a match:</p>\n<div class=\"w3-code notranslate\">\n Visit W3Schools.<span class=\"marked\">\\v</span>Learn Javascript.</div>\n\n"
              }
            }, {
              "title": "\\xxx",
              "descHtml": "Find the character specified by an octal number xxx",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\n\nnew RegExp(\"\\\\xxx\")\n\nor simply:\n\n/\\xxx/\n\n\nnew RegExp(\"\\\\xxx\", \"g\")\n\nor simply:\n\n /\\xxx/g",
                "parameters": "",
                "example": "\n<h3>Example</h3>\n<p>Do a global search for octal number 127 (W) in a string:</p>\n<div class=\"w3-code notranslate\">\nvar str = \"Visit W3Schools. Hello World!\"; <br>\nvar patt1 = /\\127/g;</div>\n<p>The <span class=\"marked\">marked</span> text below shows where the expression gets a match:</p>\n<div class=\"w3-code notranslate\">\nVisit <span class=\"marked\">W</span>3Schools. Hello <span class=\"marked\">W</span>orld!\n</div>\n\n"
              }
            }, {
              "title": "\\xdd",
              "descHtml": "Find the character specified by a hexadecimal number dd",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\n\nnew RegExp(\"\\\\xdd\")\n\nor simply:\n\n/\\xdd/\n\n\nnew RegExp(\"\\\\xdd\", \"g\")\n\nor simply:\n\n /\\xdd/g",
                "parameters": "",
                "example": "\n<h3>Example</h3>\n<p>Do a global search for the hexadecimal number 57 (W) in a string:</p>\n<div class=\"w3-code notranslate\">\nvar str = \"Visit W3Schools. Hello World!\";<br>\nvar patt1 = /\\x57/g;</div>\n<p>The <span class=\"marked\">marked</span> text below shows where the expression gets a match:</p>\n<div class=\"w3-code notranslate\">\nVisit <span class=\"marked\">W</span>3Schools. Hello <span class=\"marked\">W</span>orld!</div>\n\n"
              }
            }, {
              "title": "\\uxxxx",
              "descHtml": "Find the Unicode character specified by a hexadecimal number xxxx",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\n\nnew RegExp(\"\\\\uxxxx\")\n\nor simply:\n\n/\\uxxxx/\n\n\nnew RegExp(\"\\\\uxxxx\", \"g\")\n\nor simply:\n\n /\\uxxxx/g",
                "parameters": "",
                "example": "\n<h3>Example</h3>\n<p>Do a global search for the hexadecimal number 0057 (W) in a string:</p>\n<div class=\"w3-code notranslate\">\nvar str = \"Visit W3Schools. Hello World!\";<br>\nvar patt1 = /\\u0057/g;</div>\n<p>The <span class=\"marked\">marked</span> text below shows where the expression gets a match:</p>\n<div class=\"w3-code notranslate\">\nVisit <span class=\"marked\">W</span>3Schools. Hello <span class=\"marked\">W</span>orld!</div>\n\n"
              }
            }, {
              "title": "n+",
              "descHtml": "Matches any string that contains at least one n",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\n\nnew RegExp(\"n+\")\n\nor simply:\n\n/n+/\n\nnew RegExp(\"n+\", \"g\")\n\nor simply:\n\n /\\n+/g",
                "parameters": "",
                "example": "\n<h3>Example 1</h3>\n<p>Do a global search for at least one \"o\":</p>\n<div class=\"w3-code notranslate\">\nvar str = \"Hellooo World! Hello W3Schools!\"; <br>\nvar patt1 = /o+/g;</div>\n<p>The <span class=\"marked\">marked</span> text below shows where the expression gets a match:</p>\n<div class=\"w3-code notranslate\">\nHell<span class=\"marked\">ooo</span> W<span class=\"marked\">o</span>rld! Hell<span class=\"marked\">o</span> W3Sch<span class=\"marked\">oo</span>ls!</div>\n\n"
              }
            }, {
              "title": "n*",
              "descHtml": "Matches any string that contains zero or more occurrences of n",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\n\nnew RegExp(\"n*\")\n\nor simply:\n\n/n*/\n\nnew RegExp(\"n*\", \"g\")\n\nor simply:\n\n /\\n*/g",
                "parameters": "",
                "example": "\n<h3>Example 1</h3>\n<p>Do a global search for an \"l\", followed by zero or more \"o\" \ncharacters:</p>\n<div class=\"w3-code notranslate\">\nvar str = \"Hellooo World! Hello W3Schools!\"; <br>\nvar patt1 = /lo*/g;</div>\n<p>The <span class=\"marked\">marked</span> text below shows where the expression gets a match:</p>\n<div class=\"w3-code notranslate\">\nHe<span class=\"marked\">llooo</span> Wor<span class=\"marked\">l</span>d! He<span class=\"marked\">llo</span> W3Schoo<span class=\"marked\">l</span>s!</div>\n\n"
              }
            }, {
              "title": "n?",
              "descHtml": "Matches any string that contains zero or one occurrences of n",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\n\nnew RegExp(\"n?\")\n\nor simply:\n\n/n?/\n\nnew RegExp(\"n?\", \"g\")\n\nor simply:\n\n /\\n?/g",
                "parameters": "",
                "example": "\n<h3>Example</h3>\n<p>Do a global search for a \"1\", \nfollowed by zero or one \"0\" characters:</p>\n<div class=\"w3-code notranslate\">\nvar str = \"1, 100 or 1000?\";<br>\nvar patt1 = /10?/g;\n</div>\n<p>The <span class=\"marked\">marked</span> text below shows where the expression gets a match:</p>\n<div class=\"w3-code notranslate\">\n<span class=\"marked\">1</span>, <span class=\"marked\">10</span>0 or <span class=\"marked\">10</span>00?\n</div>\n\n"
              }
            }, {
              "title": "n{X}",
              "descHtml": "Matches any string that contains a sequence of X n's",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\n\nnew RegExp(\"n{X}\")\n\nor simply:\n\n/n{X}/\n\nnew RegExp(\"n{X}\", \"g\")\n\nor simply:\n\n /\\n{X}/g",
                "parameters": "",
                "example": "\n<h3>Example</h3>\n<p>Do a global search for a substring that contains a sequence of four digits:</p>\n<div class=\"w3-code notranslate\">\nvar str = \"100, 1000 or 10000?\";<br>\nvar patt1 = /\\d{4}/g;\n</div>\n<p>The <span class=\"marked\">marked</span> text below shows where the expression gets a match:</p>\n<div class=\"w3-code notranslate\">\n100, <span class=\"marked\">1000</span> or <span class=\"marked\">1000</span>0?</div>\n\n"
              }
            }, {
              "title": "n{X,Y}",
              "descHtml": "Matches any string that contains a sequence of X to Y n's",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\n\nnew RegExp(\"n{X,Y}\")\n\nor simply:\n\n/n{X,Y}/\n\nnew RegExp(\"n{X,Y}\", \"g\")\n\nor simply:\n\n /\\n{X,Y}/g",
                "parameters": "",
                "example": "\n<h3>Example</h3>\n<p>Do a global search for a substring that contains a sequence of three to four digits:</p>\n<div class=\"w3-code notranslate\">\nvar str = \"100, 1000 or 10000?\";<br>\nvar patt1 = /\\d{3,4}/g;\n</div>\n<p>The <span class=\"marked\">marked</span> text below shows where the expression gets a match:</p>\n<div class=\"w3-code notranslate\">\n<span class=\"marked\">100</span>, <span class=\"marked\">1000</span> or <span class=\"marked\">1000</span>0?</div>\n\n"
              }

            }, {
              "title": "n{X,}",
              "descHtml": "Matches any string that contains a sequence of at least X n's",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\n\nnew RegExp(\"n{X}\")\n\nor simply:\n\n/n{X}/\n\nnew RegExp(\"n{X}\", \"g\")\n\nor simply:\n\n /\\n{X}/g",
                "parameters": "",
                "example": "\n<h3>Example</h3>\n<p>Do a global search for a substring that contains a sequence of four digits:</p>\n<div class=\"w3-code notranslate\">\nvar str = \"100, 1000 or 10000?\";<br>\nvar patt1 = /\\d{4}/g;\n</div>\n<p>The <span class=\"marked\">marked</span> text below shows where the expression gets a match:</p>\n<div class=\"w3-code notranslate\">\n100, <span class=\"marked\">1000</span> or <span class=\"marked\">1000</span>0?</div>\n\n"
              }
            }, {
              "title": "n$",
              "descHtml": "Matches any string with n at the end of it",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\n\nnew RegExp(\"n$\")\n\nor\n\n/n$/\n\nnew RegExp(\"n$\", \"g\")\n\nor simply:\n\n /\\n$/g",
                "parameters": "",
                "example": "\n<h3>Example</h3>\n<p>Do a global search for \"is\" at the end of a string:</p>\n<div class=\"w3-code notranslate\">\nvar str = \"Is this his\";<br>\nvar patt1 = /is$/g;</div>\n<p>The <span class=\"marked\">marked</span> text below shows where the expression gets a match:</p>\n<div class=\"w3-code notranslate\">\nIs this h<span class=\"marked\">is</span></div>\n\n"
              }

            }, {
              "title": "^n",
              "descHtml": "Matches any string with n at the beginning of it",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\n\nnew RegExp(\"^n\")\n\nor\n\n/^n/\n\nnew RegExp(\"^n\", \"g\")\n\nor simply:\n\n /\\^n/g",
                "parameters": "",
                "example": "\n<h3>Example</h3>\n<p>Do a global search for \"Is\" at the beginning of a string:</p>\n<div class=\"w3-code notranslate\">\nvar str = \"Is this his\";<br>\nvar patt1 = /^Is/g;</div>\n<p>The <span class=\"marked\">marked</span> text below shows where the expression gets a match:</p>\n<div class=\"w3-code notranslate\">\n<span class=\"marked\">Is</span> this his\n</div>\n\n"
              }

            }, {
              "title": "?=n",
              "descHtml": "Matches any string that is followed by a specific string n",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\n\nnew RegExp(\"regexp(?=n)\")\n\nor\n\n/regexp(?=n)/\n\nnew RegExp(\"regexp(?=n)\", \"g\")\n\nor simply:\n\n /\\regexp(?=n)/g",
                "parameters": "",
                "example": "\n<h3>Example</h3>\n<p>Do a global search for \"is\" followed by \" all\":</p>\n<div class=\"w3-code notranslate\">\nvar str = \"Is this all there is\";<br>\nvar patt1 = /is(?= all)/g;\n</div>\n<p>The <span class=\"marked\">marked</span> text below shows where the expression gets a match:</p>\n<div class=\"w3-code notranslate\">\nIs th<span class=\"marked\">is</span> all there is\n</div>\n\n"
              }

            }, {
              "title": "?!n",
              "descHtml": "Matches any string that is not followed by a specific string n",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,
              "info": {
                "syntax": "\n\nnew RegExp(\"regexp(?!n)\")\n\nor\n\n/regexp(?!n)/\n\nnew RegExp(\"regexp(?!n)\", \"g\")\n\nor simply:\n\n /\\regexp(?!n)/g",
                "parameters": "",
                "example": "\n<h3>Example</h3>\n<p>Do a global, case insensitive search for \"is\" \nnot followed by \" all\":</p>\n<div class=\"w3-code notranslate\">\nvar str = \"Is this all there is\";<br>\nvar patt1 = /is(?! all)/gi;</div>\n<p>The <span class=\"marked\">marked</span> text below shows where the expression gets a match:</p>\n<div class=\"w3-code notranslate\">\n<span class=\"marked\">Is</span> this all there <span class=\"marked\">is</span>\n</div>\n\n"
              }

            }, {
              "title": "constructor",
              "descHtml": "Returns the function that created the RegExp object's prototype",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,

            }, {
              "title": "global",
              "descHtml": "Checks whether the \"g\" modifier is set",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,

            }, {
              "title": "ignoreCase",
              "descHtml": "Checks whether the \"i\" modifier is set",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2,

            }, {
              "title": "lastIndex",
              "descHtml": "Specifies the index at which to start the next match",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2
            }, {
              "title": "multiline",
              "descHtml": "Checks whether the \"m\" modifier is set",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2
            }, {
              "title": "source",
              "descHtml": "Returns the text of the RegExp pattern",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2
            }, {
              "title": "compile()",
              "descHtml": "Deprecated in version 1.5. Compiles a regular expression",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2
            }, {
              "title": "exec()",
              "descHtml": "Tests for a match in a string. Returns the first match",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2
            }, {
              "title": "test()",
              "descHtml": "Tests for a match in a string. Returns true or false",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2
            }, {
              "title": "toString()",
              "descHtml": "Returns the string value of the regular expression",
              "ex": {
                "files": [],
                "code": []
              },
              "todo": [],
              "cols": 2
            }]
          },
        ]
      },

      ]
    };

    this.timers = {
      title:"https://javascript.info/settimeout-setinterval"
    };
  }

  onChange(code) {
    // console.log('new code', code);
  }

  ngOnInit() {
  }

  async executeCodeOnServer(event)
  {
    const xxx = await this.httpService.postJson('http://localhost:3001/api/funcp',
      {
        code: this.text
      });
    this.codeResult = xxx;
  }




}
