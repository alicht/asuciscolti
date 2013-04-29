 function view_lti(url){
	
    (function ($) {
        Drupal.behaviors.touch = {
            attach: function(context, settings) {
                $('#SuggestedLTI').html('<table width="100%" cellspacing="0" cellpadding="0" id="data-entry"></table>');
                $('#data-entry').dataTable({
	                "bProcessing": true,
                    "sDom": '<"inline"1><"floatright"f>rt<ip>',
					"sAjaxSource": "/drupal/API/DatabaseSuggestLTIPull.php",
                    "aoColumns": [
						{ "sTitle": "LTI Name ", "sWidth": "25%" },
						{ "sTitle": "URL", "sWidth": "25%" },
						{ "sTitle": "Description", "sWidth": "25%" },
                        { "sWidth": "25%" }
                    ]
                });
            }
        }
    })(jQuery);