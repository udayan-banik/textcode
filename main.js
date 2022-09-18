let editor = document.querySelector("#editor");

var input = document.getElementById("myselect");

var selectLanguage = input.value;

var code = ace.edit(editor);

function changeLanguage() {
  var selectLanguage = input.value;
  code.session.setMode({
    path: "ace/mode/" + selectLanguage,
    v: Date.now(),
  });

  //Java

  if (selectLanguage == "java") {
    let democode = `import java.util.*;\n
public class Main {
  public static void main(String args[]) {
    System.out.println("hello");
  }
}`;
    code.setValue(democode);
  }

  //C_Cpp

  if (selectLanguage == "c_cpp") {
    let democode = `#include <iostream>
using namespace std;\n
int main() {
    cout<<"Hello World";
}`;
    code.setValue(democode);
  }

  //javascript

  if (selectLanguage == "javascript") {
    let democode = `console.log("Hello world!")`;
    code.setValue(democode);
  }

  //python

  if (selectLanguage == "python") {
    let democode = `print("Hello world!")`;
    code.setValue(democode);
  }

  //C#

  if (selectLanguage == "csharp") {
    let democode = `using System.IO;
using System;
    
    class Program
    {
        static void Main()
        {
            Console.WriteLine("Hello, World!");
        }
    }`;
    code.setValue(democode);
  }

  console.log(selectLanguage);
}

function copyText() {
  editor.selectAll();
}

/* ClipboardJS Implementation (Not working) */

// Select elements
const target = document.getElementById("lola");
const button = target.nextElementSibling;

// Init clipboard -- for more info, please read the offical documentation: https://clipboardjs.com/
var clipboard = new ClipboardJS(button, {
  target: target,
  text: function () {
    return target.value;
  },
});

// Success action handler
clipboard.on("success", function (e) {
  const currentLabel = button.innerHTML;

  // Exit label update when already in progress
  if (button.innerHTML === "Copied!") {
    return;
  }

  // Update button label
  button.innerHTML = "Copied!";

  // Revert button label after 3 seconds
  setTimeout(function () {
    button.innerHTML = currentLabel;
  }, 3000);
});
