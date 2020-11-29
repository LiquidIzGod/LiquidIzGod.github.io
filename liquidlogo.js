let liqlogo = document.getElementById('liqlogo');

let step_num = 1;

let liqLogoAnimate = function(){

    if(step_num > 26){

        step_num = 1;
    }


    liqlogo.src = 'page projects/small-projects/liquid_logo_animation/logo_frame_'+step_num+'.png';

    step_num = step_num + 1;

    setTimeout(liqLogoAnimate,100);

}
