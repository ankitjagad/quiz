var Adsense = function(){
    var list = function(){
        var dataArr = {};
        var columnWidth = { "width": "5%", "targets": 0 };
        var arrList = {
            'pageLength': 5,
            'tableID': '#adsense-users-list',
            'ajaxURL': baseurl + "adsense/users-management-ajaxcall",
            'ajaxAction': 'getdatatable',
            'postData': dataArr,
            'hideColumnList': [],
            'noSortingApply': [0,1,8],
            'noSearchApply': [0,1,8],
            'defaultSortColumn': [0],
            'defaultSortOrder': 'DESC',
            'setColumnWidth': columnWidth
        };
        getDataTable(arrList);


        $("body").on("click", ".deleteadsenseusers", function() {
            var id = $(this).data('id');
            setTimeout(function() {
                $('.yes-sure:visible').attr('data-id', id);
            }, 500);
        })

        $('body').on('click', '.yes-sure', function() {
            var id = $(this).attr('data-id');
            var data = { id: id, _token: $('#_token').val() };
                $.ajax({
                type: "POST",
                headers: {
                    'X-CSRF-TOKEN': $('input[name="_token"]').val(),
                },
                url: baseurl + "adsense/users-management-ajaxcall",
                data: { 'action': 'deleteadsenseusers', 'data': data },
                success: function(data) {
                    $("#loader").show();
                    handleAjaxResponse(data);
                }
            });
        });


        $("body").on("click", ".deactiveadsenseusers", function() {
            var id = $(this).data('id');
            setTimeout(function() {
                $('.yes-sure-deactive:visible').attr('data-id', id);
            }, 500);
        })

        $('body').on('click', '.yes-sure-deactive', function() {
            var id = $(this).attr('data-id');
            var data = { id: id, _token: $('#_token').val() };
                $.ajax({
                type: "POST",
                headers: {
                    'X-CSRF-TOKEN': $('input[name="_token"]').val(),
                },
                url: baseurl + "adsense/users-management-ajaxcall",
                data: { 'action': 'deactiveadsenseusers', 'data': data },
                success: function(data) {
                    $("#loader").show();
                    handleAjaxResponse(data);
                }
            });
        });

        $("body").on("click", ".activeadsenseusers", function() {
            var id = $(this).data('id');

            setTimeout(function() {
                $('.yes-sure-active:visible').attr('data-id', id);
            }, 500);
        })

        $('body').on('click', '.yes-sure-active', function() {
            var id = $(this).attr('data-id');

            var data = { id: id, _token: $('#_token').val() };
                $.ajax({
                type: "POST",
                headers: {
                    'X-CSRF-TOKEN': $('input[name="_token"]').val(),
                },
                url: baseurl + "adsense/users-management-ajaxcall",
                data: { 'action': 'activeadsenseusers', 'data': data },
                success: function(data) {
                    $("#loader").show();
                    handleAjaxResponse(data);
                }
            });
        });
    }

    var add_adsense = function(){


        var form = $('#add-adsense');
        var rules = {
            first_name: {required: true},
            last_name: {required: true},
            mo_no: {required: true},
            email: {required: true, email:true},
            adseanse_script: {required: true},
        };

        var message = {

            first_name : {
                required : "Please enter first name"
            },
            last_name : {
                required : "Please enter last name"
            },
            mo_no : {
                required : "Please enter mobile number"
            },
            email : {
                required : "Please enter email",
                email : "Please enter vail email"
            },
            doj : {
                required : "Please enter date of joining"
            },
            adseanse_script : {
                required : "Please enter adseanse script"
            },
        }
        handleFormValidateWithMsg(form, rules,message, function(form) {
            handleAjaxFormSubmit(form,true);
        });
    }

    var edit_adsense = function(){


        var form = $('#edit-adsense');
        var rules = {
            first_name: {required: true},
            last_name: {required: true},
            mo_no: {required: true},
            email: {required: true,email:true},
            doj: {required: true},
            adseanse_script: {required: true},
        };

        var message = {

            first_name : {
                required : "Please enter first name"
            },
            last_name : {
                required : "Please enter last name"
            },
            mo_no : {
                required : "Please enter mobile number"
            },
            email : {
                required : "Please enter email",
                email : "Please enter vail email"
            },
            doj : {
                required : "Please enter date of joining"
            },
            adseanse_script : {
                required : "Please enter adseanse script"
            },
        }
        handleFormValidateWithMsg(form, rules,message, function(form) {
            handleAjaxFormSubmit(form,true);
        });
    }

    return {
        init:function(){
            list();
        },
        add:function(){
            add_adsense();
        },
        edit:function(){
            edit_adsense();
        }
    }
}();
