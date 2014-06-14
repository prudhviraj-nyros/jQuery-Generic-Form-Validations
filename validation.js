
/* ************************************************ jquery form validations ****************************************************** */

function formValidation()   //onsubmit function
{

   inputs=$(":input");
   for(i=0;i<inputs.length;i++)
   {
   	$(inputs[i]).blur();// Triggering all the on functions
   }

   if($("[class*='alert1']").length||$("[class*='alert2']").length) //checking for alert messages
   {
   	alert("Please follow the 'blue' instructions to fill up the form properly,thank you");
   return false;
   }
   else
   {
   	alert("Congrats! you have successfully registered");
   	return true;
   } 
}


/* ********************************************************************************************************************************** */


function FieldValidation(obj,type,min,max) // Text input Validations
{
	if($(obj).val()==""||$(obj).val()==null)  // checking whether the input field is empty or not
	{
		if($(".alert1"+$(obj).attr("name")+"").length)
		{
			return false;
		}
		else if($(".alert2"+$(obj).attr("name")+"").length)
		{
			$(".alert2"+$(obj).attr("name")+"").remove();
			$(obj).after("<p class='alert1"+$(obj).attr("name")+"'  style='font-size:11px;color:blue'>* "+$(obj).attr("name")+" must not be empty");
			return false;
		}
		else
		{
			$(obj).after("<p class='alert1"+$(obj).attr("name")+"'  style='font-size:11px;color:blue'>* "+$(obj).attr("name")+" must not be empty");
			return false;
		}
	}
	else
	{
		if($(".alert1"+$(obj).attr("name")+"").length)
		{
			$(".alert1"+$(obj).attr("name")+"").remove();
			return false;
		}
	}


	var regularExpression=$(obj).attr("pattern"); // checking whether the attribute pattern is present or not
        	
		if((regularExpression=="")||(regularExpression==null))
    	    {
    		if(type==null && max==null && min==null)
            {
                return false;
            }
            else if(type!==null)
            {
                
            
                 
    		if(type!=="phonenumber")
			{
    			if(type=="alphanumeric")
        		{
        			format= "[a-zA-Z0-9]"; 
        		}
        		else if(type=="numeric")
        		{
        			format="[0-9]";
        		}
        		else if(type=="alphabets")
        		{
        			format="[a-zA-Z]";
        		}
        		else if(type="null")
        		{
        			format="";
        		}

                if(max!==null||min!==null)
                {
    			regularExpression = new RegExp("^"+format+".{" + min + "," + max + "}$");//making customized regular expression
    			msg="* "+$(obj).attr("name")+"'s length must be between " + min + " and " + max + " and " + type;
                }
                else 
                {
                regularExpression = new RegExp("^ "+format+" *$");
                msg="* "+$(obj).attr("name")+" must be  " + type;
                }
               
			}
    		else if(type=="phonenumber")
    		{
    			regularExpression= /^[+]\s[0-9]{2}\s\([0-9]{3}\)\-[0-9]{3}\-[0-9]{4}$/;
    			msg="* "+$(obj).attr("name")+" must be of the format + 91 (990)-824-7888 ";
    		}

			if(regularExpression.test($(obj).val())==false) /* *************** validating whether the field is of required format or not ****************** */ 
			{
				if($(".alert2"+$(obj).attr("name")+"").length)
				{
					return false;
				}
				else if($(".alert1"+$(obj).attr("name")+"").length)
				{
					$(".alert1"+$(obj).attr("name")+"").remove();
					$(obj).after("<p class='alert2"+$(obj).attr("name")+"'  style='font-size:11px;color:blue'>"+msg);
					return false;
				}
				else
				{
				$(obj).after("<p class='alert2"+$(obj).attr("name")+"'  style='font-size:11px;color:blue'>"+msg);
				return false;
				}
			}
			else if($(".alert2"+$(obj).attr("name")+"").length)
			{
				$(".alert2"+$(obj).attr("name")+"").remove();
				return false;
			}
		}
	}
} 
		

function SelectFieldValidation(obj)  // Select field validations
{
	if($(obj).val()==""||$(obj).val()==null)  //whether the select field is empty or not
	{
		if($(".alert1"+$(obj).attr("name")+"").length)
		{
			return false;
		}
		else
		{
			$(obj).before("<p class='alert1"+$(obj).attr("name")+"'  style='font-size:11px;color:blue'>* "+$(obj).attr("name")+" must not be empty</p>");
			return false;
		}
	}
	else 
	{
		if($(".alert1"+$(obj).attr("name")+"").length)
		{
			$(".alert1"+$(obj).attr("name")+"").remove();
			return false;
		}

	}
} 
		
	/* *********************************************************************************************** */
function CheckBoxValidation(obj)	// Check Box Validations
{
	checkBoxName=$(obj).attr("name");
	IsCheckBox = 0;
	if($("[name='"+checkBoxName+"']:checked").length) // whether any check boxes of same name are checked 
	{
		IsCheckBox++;
	}

	if(IsCheckBox==0)
	{
		if($(".alert1"+$(obj).attr("name")+"").length)
		{
			return false;
		}
		else
		{
		$(obj).before("<p class='alert1"+$(obj).attr("name")+"' style='font-size:11px;color:blue'>* Select one of the "+$(obj).attr("name")+" </p>");
		return false;
		}
	}
	else if(IsCheckBox!==0)
	{
		if($(".alert1"+$(obj).attr("name")+"").length)
		{
			$(".alert1"+$(obj).attr("name")+"").remove();
			return false;
		}
	}

}
									/* *********************************************************************************************** */
