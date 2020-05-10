
import $ from 'jquery'




import './css/index.css'


import './css/index.less'
import './css/index.scss'


import 'bootstrap/dist/css/bootstrap.css'

class Person {
    static obj = {name: "莫甘娜"};
}
console.log(Person.obj);


$(function () {
    $("li:odd").css("background", "red");
    $("li:even").css("background", "hotpink");

})