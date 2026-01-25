/*
<----------------------------------- ALL ABOUT JS ENGIENE-------------------------------------------------->

JS engiene : JS engiene is the heart of the js runtime environment . Every browser has its own runtime environment and its own js engiene.
Ex : Chrome has its v8 engiene . It has it own set of API's and other features that can be used . Even nodejs is based on the v8 engiene of chrome. Firefox has -> SPIDER MONKEY  .

Now lets deep dive inside the architechture of the js engiene : 
It mainly consists of these steps : 
1. Code Input
2. Parsing
3. Compilation
4. Execution
  
Imp thing to note : JS is JUST IN TIME compilation language ( it uses both interpretor as well as compiler to execute its code).
What is interpretor & compiler ?> -> in case of interpretor , the entire code is executed line by line wherease in case of compiler the entire code is executed and then if there are no compilator error takes place then a executable file is generated  ( eH .exe in cpp) which is then sent for execution .

The diff stages : 
1.code is given as a input 
2.then the code is parsed : tokens are generated and a AST (abstract syntax tree is generated)
3.after that , it uses both interpretor and compiler ( to optimize the code ) and then sent to the execution phase
4.Code is executed 


Googles v8 engiene architechture : 1
1.Javascript Source Code - > Parser -> Abstract Syntax Tree ( AST) -> Interpretor (Ingition) + Comipler(TurboFan : for optimizing code) -> Bytecode(for execution)

*/