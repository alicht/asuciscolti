	(function ($) {
        Drupal.behaviors.touch = {
            attach: function(context, settings) {
                $('#HomeLTI').html('<table width="100%" cellspacing="0" cellpadding="0" id="data-entry"></table>');
                $('#data-entry').dataTable({
	                						"fnRowCallback": function(nRow, aData, iDisplayIndex, iDisplayIndexFull ) {											$('td:input[type=radio].star').rating();										},
                        "bScrollInfinite": true,
                        "sScrollY": "1000px",
                        "sDom": '<"top">rt<"bottom">',
						"aaSorting": [],
                        "sAjaxSource": "/drupal/API/HomeDataPull.php",
                        "aoColumns": [
				{ "sWidth": "25%" },
				{ "sWidth": "25%" },
				{ "sWidth": "25%" },
				{ "sWidth": "25%" }
                         ]
                });							}
        }
    })(jQuery);
