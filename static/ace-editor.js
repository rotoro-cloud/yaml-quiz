var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/yaml");

var solutionEditor = ace.edit("solutionEditor");
solutionEditor.setTheme("ace/theme/monokai");
solutionEditor.session.setMode("ace/mode/yaml");
solutionEditor.setReadOnly(true);

var rows = 9;
var cell_height = 100;
var cell_width = 90;

var icon_height = 50;
var icon_width = 50;

var app = angular.module('myApp', []);
app.controller('myCtrl', ['$scope', '$sce', function($scope, $sce) {
    $scope.jsonData = {}
    $scope.correct_answer = false;
    $scope.question_state = "light-blue darken-4"
    $scope.showSolutionFlag = false;
    $scope.lastQuestion = false

    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/yaml");

    $scope.typeOfItem = function(item){

        if(typeof(item) == 'object'){

            if(Array.isArray(item)){
                return "array"
            }else{
                return "dictionary"
            }

        }else{
            return(typeof(item))
        }

    }

    var updateJsonData = function(){

        yamlString = editor.getValue();
        try{
            $scope.jsonData = YAML.parse(yamlString);
        }catch(err) {
          console.log(err.message);
        }

    }

    updateJsonData()

    var stageQuestion = function(){
        $scope.silent_change = true
        editor.setValue(YAML.stringify($scope.current_question.stage, 10), 1);
        updateJsonData()
        $scope.silent_change = false
    }

    var checkAnswer = function(){
        if(_.isEqual($scope.jsonData, $scope.current_question.answer)){
            $scope.correct_answer = true;
            $scope.question_state = "teal darken-3";
            confetti();
        }
    }


    var loadQuestion = function(){
        $scope.current_question = questions[$scope.current_question_number]
        $scope.current_question.question = $sce.trustAsHtml($scope.current_question.question)
        $scope.current_question.subText = $sce.trustAsHtml($scope.current_question.subText)
        $scope.correct_answer = false;
        stageQuestion()
        $scope.question_state = "light-blue darken-4"
        if($scope.current_question_number >= (questions.length - 1))$scope.lastQuestion = true
        else $scope.lastQuestion = false
    }

    $scope.nextQuestion = function(){
        $scope.current_question_number += 1
        loadQuestion()
    }

    $scope.previousQuestion = function(){
        $scope.current_question_number -= 1
        loadQuestion()
    }

    $scope.showSolution = function(){
        $scope.showSolutionFlag = !$scope.showSolutionFlag
        if($scope.showSolutionFlag){
            solutionEditor.setValue(YAML.stringify($scope.current_question.answer, 10), 1);
        }
    }

    $scope.resetAnswer = function(){
        stageQuestion()
    }

    $scope.current_question_number = -1
    $scope.nextQuestion()

    editor.session.on('change', function(delta) {
        // delta.start, delta.end, delta.lines, delta.action
        if($scope.silent_change) return
        console.log("Inside angular")
        console.log(delta)
        updateJsonData()
        $scope.$apply(function(){
            checkAnswer()
        });

    });
    
    
//////
    const colors = [ "DodgerBlue", "OliveDrab", "Gold", "pink", "SlateBlue", "lightblue", "Violet", "PaleGreen", "SteelBlue", "SandyBrown", "Chocolate", "Crimson" ];
    const mp = 180;

    const confetti = () => {

        let particles = [];
        let ratio = window.devicePixelRatio;
        let c = document.createElement('canvas');
        let ctx = c.getContext('2d');
        let W = window.innerWidth* ratio;
        let H = window.innerHeight* ratio;

        c.width = W;
        c.height = H;
        c.style.position = 'absolute';
        c.style.left = '0px';
        c.style.top = '0px';
        c.style.pointerEvents = 'none';
        c.style.zIndex = 9999; 

        document.body.appendChild(c);

        for(var i = 0; i < mp; i++) {
            particles.push({
                x: Math.random() * W,
                y: 1,
                r: Math.random() * 15 + 1,
                d: Math.random() * mp,
                color: colors[Math.floor(Math.random() * colors.length)],
                tilt: Math.floor(Math.random() * 5) -5,
                fade: .03,
                opacity: 1,
                angle: 0
            });
        }

        render(particles, ctx, W, H);
        setTimeout(() => document.body.removeChild(c), 5000);
    }

    const render = (particles, ctx, W, H) => {
        requestAnimationFrame(() => render(particles, ctx, W, H));
        ctx.clearRect(0, 0, W, H);

        particles.forEach((p, i) => {

            p.angle += 0.01;
            p.x += Math.sin(p.angle) * 2;
            p.y += Math.cos(p.angle * p.d) + 0.004 + p.r / 2;

            if(p.x > W +5 || p.x < -5 || p.y > H) {
                if (i % 3 > 0)
                {
                    particles[i] = {
                        x: Math.random() * W,
                        y: -10,
                        r: p.r,
                        d: p.d,
                        color: p.color,
                        tilt: p.tilt
                    };
                } else {
                        particles[i] = {
                        x: W + 5,
                        y: Math.random() * H,
                        r: p.r,
                        d: p.d,
                        color: p.color,
                        tilt: p.tilt
                    };
                }
            }
            p.opacity -= 0.001;

            if(p.opacity < 0 || p.radius < 0) return;

            ctx.beginPath();
            ctx.globalAlpha = p.opacity;
            ctx.lineWidth = p.r;
            ctx.strokeStyle = p.color;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.x + p.tilt + p.r / 2, p.y + p.tilt);
            ctx.stroke();
        });

        return ctx;
    }
//////    
    

}]);


app.directive("box", function() {
    return {
        scope: {
            boxItem: "=",
            parentType: "=",
            parentName: "="
        },
        link: function(scope, element, attrs) {
            scope.typeOfItem = function(item){

                if(typeof(item) == 'object'){

                    if(Array.isArray(item)){
                        return "array"
                    }else{
                        if(scope.allValuesString(item)){
                            //return "properties"
                            return "dictionary"
                        }else{
                            return "dictionary"
                        }
                    }

                }else{
                    return(typeof(item))
                }

            }

            scope.allValuesString = function(item){

                return item && Object.values(item).reduce(function(accumulator, currentValue){
                    return accumulator && (typeof(currentValue)=='string' || typeof(currentValue)=='number' || currentValue==null)
                }, true) || item && Object.values(item).length == 0

            }

        },
        template : "<div class='animated zoomIn card' ng-class=\"{'light-blue lighten-5': typeOfItem(boxItem) == 'array', 'deep-purple lighten-3 inblock': typeOfItem(boxItem) == 'dictionary', 'deep-purple lighten-5 inblock': typeOfItem(boxItem) == 'properties', 'cyan lighten-1 inblock': typeOfItem(boxItem) == 'string' || typeOfItem(boxItem) == 'number'}\">" +
                        "<span class='new badge red left' data-badge-caption='' ng-if='parentName' >{{ parentName }}</span>" +
                        "<span class='new badge blue right' data-badge-caption=''>{{ typeOfItem(boxItem) }}</span>" +
                        "<img ng-if='boxItem.name' src='static/images/{{ boxItem.name }}.png' style='width: 50px; height:50px;'>" +
//                        "{{ boxItem }}" +

                        "<div class='center-align' ng-if=\"typeOfItem(boxItem) == 'string' || typeOfItem(boxItem) == 'number'\">" +
                            "<img ng-if='parentType!==\"dictionary\"' src='static/images/{{ boxItem }}.png' style='width: 50px; height:50px;'>" +
                            "<p>{{ boxItem }}</p>" +
                        "</div>" +

                        "<div ng-if=\"typeOfItem(boxItem) == 'dictionary'\">" +
                            "<div ng-repeat='(key, value) in boxItem track by $index'>" +
//                               "<span class='new badge red left' data-badge-caption='' >{{ key }}</span>" +
                               "<box parent-name='key' parent-type='typeOfItem(boxItem)' ng-if='value' box-item='value'></box>" +
                            "</div>" +
                        "</div>" +


                        "<div ng-if=\"typeOfItem(boxItem) == 'properties'\">" +
                               "<div ng-repeat='(key, value) in boxItem track by $index' class='badge badge-pill badge-success pull-right' style='text-align: right;'>{{ key }}: {{ value }}</div>" +
                        "</div>" +

                        "<div ng-if=\"typeOfItem(boxItem) == 'array'\">" +
                            "<box parent-type='typeOfItem(boxItem)' box-item='item' ng-repeat='item in boxItem track by $index'></box>" +
                        "</div>" +
                   "</div>"
    };
});

