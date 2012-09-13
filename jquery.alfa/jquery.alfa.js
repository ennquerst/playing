
/*!
 * jquery.alfa.js
 *
 * Launch  : September 2012
 * Version : 0.0
 */

(function($){

      // A global array used by the functions of the plug-in:
      var gVars = {};

      // Extending the jQuery core:
      $.fn.alfa = function(){

            $.each(arguments, this);
            var container = this.eq(0); //it takes the first available container which has the same id as paramater says

 		if(!container)
		{
			try{
				console.log("Invalid selector!");
			} catch(e){}
			
			return false;
		}
            $('div.display').html("ahoj");
           ahoj.call(container);
            return this;
      }


      // Setting up a interval, executed every 1000 milliseconds:
//      setInterval(function(){
//
//      },1000);

      function ahoj()
      {
            $("#display").html("00:00:01");

      }







})(jQuery)
