//change 10 to the total number of questions
var total=10
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Excellent!"
compliments[1]="Wow, you're really rocking!"
compliments[2]="You must have studied hard. Good job!"
compliments[3]="Right on."
compliments[4]="Correct!"
compliments[5]="Great Job!"
compliments[6]="Good work!"


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="What ingredient helps dough rise and become fluffy?"
choice1[1]="Sugar"
choice1[2]="Salt"
choice1[3]="Yeast"
choice1[4]="Water"

question[2]="What do you call the process of mixing butter and sugar together until light and fluffy?"
choice2[1]="Folding"
choice2[2]="Creaming"
choice2[3]="Whisking"
choice2[4]="Kneading"

question[3]="Which of these is not a type of flour?"
choice3[1]="All Purpose"
choice3[2]="Whole wheat"
choice3[3]="Baking Soda"
choice3[4]="Cake"

question[4]="What temperature scale is commonly used in baking recipes in the U.S.?"
choice4[1]="Celsius"
choice4[2]="Fahrenheit"
choice4[3]="Kelvin"
choice4[4]="Metric"

question[5]="What does preheat the oven mean?"
choice5[1]="Turn on the oven after putting in the food"
choice5[2]="Heat the oven before you start baking"
choice5[3]="Let the oven cool down"
choice5[4]="Bake without heat"

question[6]="Which of the following ingredients makes cookies chewy?"
choice6[1]="Water"
choice6[2]="Brown sugar"
choice6[3]="Powdered sugar"
choice6[4]="Salt"

question[7]="What should you do after adding eggs to a batter?"
choice7[1]="Ignore them"
choice7[2]="Stir gently"
choice7[3]="Mix until fully combined"
choice7[4]="Freeze the mixture"

question[8]="What is the main ingredient in frosting?"
choice8[1]="Flour"
choice8[2]="Butter and sugar"
choice8[3]="Milk"
choice8[4]="Salt"

question[9]="Which tool is best for measuring flour accurately?"
choice9[1]="Measuring cup"
choice9[2]="Teaspoon"
choice9[3]="Scale only"
choice9[4]="Plate"


question[10]="What should you do before taking cookies out of the oven?"
choice10[1]="Shake the tray"
choice10[2]="Tap them with a spoon"
choice10[3]="Check if the edges are lightly golden"
choice10[4]="Add more sugar"


solution[1]="c"
solution[2]="b"
solution[3]="c"
solution[4]="b"
solution[5]="b"
solution[6]="b"
solution[7]="c"
solution[8]="b"
solution[9]="a"
solution[10]="c"

