//tabs
$(document).ready(function () 
{
	setSelectData("nanjing");
	setSelectDateTimeData();
	$('ul.nav > li').click(function (e) 
	{
		e.preventDefault();
		/*
		$('ul.nav > li').removeClass('active');
		$(this).addClass('active');
		*/
		console.log($(this).attr("id"));
		setSelectData($(this).attr("id"));
	});
});

function setSelectData(cityName)
{
	if (cityName == "nanjing")
	{
		var dataCustom = [
			{'v': '南京市', 'n': '南京市', 's': [
			  {'v': '玄武区', 'n': '玄武区', 's': [
				{'v': '1街道', 'n': '1街道'},
				{'v': 'street', 'n': '5'},
				{'v': 'street', 'n': '6'},
				{'v': 'street', 'n': '7'},
				{'v': 'street', 'n': '8'},
				{'v': 'street', 'n': '9'},
				{'v': 'street', 'n': '10'}
			  ]},
			  {'v': '鼓楼区', 'n': '鼓楼区', 's': [
				{'v': 'street', 'n': '11'},
				{'v': 'street', 'n': '11'},
				{'v': 'street', 'n': '11'},
				{'v': 'street', 'n': '11'},
				{'v': 'street', 'n': '11'},
				{'v': 'street', 'n': '11'},
				{'v': 'street', 'n': '11'}
			  ]}
			]},
		  ];
	}
	else if (cityName == "shanghai")
	{
		var dataCustom = [
			{'v': '上海市', 'n': '上海市', 's': [
			  {'v': '长宁区', 'n': '长宁区', 's': [
				{'v': '1街道', 'n': '1街道'},
				{'v': 'street', 'n': '5'},
				{'v': 'street', 'n': '6'},
				{'v': 'street', 'n': '7'},
				{'v': 'street', 'n': '8'},
				{'v': 'street', 'n': '9'},
				{'v': 'street', 'n': '10'}
			  ]},
			  {'v': '闸北区', 'n': '闸北区', 's': [
				{'v': 'street', 'n': '11'},
				{'v': 'street', 'n': '11'},
				{'v': 'street', 'n': '11'},
				{'v': 'street', 'n': '11'},
				{'v': 'street', 'n': '11'},
				{'v': 'street', 'n': '11'},
				{'v': 'street', 'n': '11'}
			  ]}
			]},
		];	
	}
	
	$('#street_info').cxSelect({
		selects: ['city', 'district', 'street'],
		jsonValue: 'v',
    	data: dataCustom
	});
}

function setSelectDateTimeData()
{
	var urlDateTime = 'js/datetime.json';
	$.cxSelect.defaults.url = urlDateTime;
	
	$('#serve_date_time').cxSelect({
    selects: ['serve_date', 'serve_time'],
    emptyStyle: 'none'
  });

}


//validate
$(document).ready(function() {
    $('#form_addr').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            
            city: {
                validators: {
                    notEmpty: {
                        message: '城市选择不能为空'
                    }
                }
            },
			district: {
                validators: {
                    notEmpty: {
                        message: '区/县选择不能为空'
                    }
                }
            },
			street: {
                validators: {
                    notEmpty: {
                        message: '街道选择不能为空'
                    }
                }
            },
            detail_addr: {
                validators: {
                    notEmpty: {
                        message: '详细地址信息不能为空'
                    }
                }
            },
            serve_date: {
                validators: {
                    notEmpty: {
                        message: '服务日期信息不能为空'
                    }
                }
            },
            serve_date: {
                validators: {
                    notEmpty: {
                        message: '服务时间信息不能为空'
                    }
                }
            },
			username: {
                message: 'The username is not valid',
                validators: {
                    notEmpty: {
                        message: '用户姓名不能为空'
                    },
                    stringLength: {
                        min: 2,
                        max: 5,
                        message: '姓名必须在2位数及5位数之间'
                    },
                }
            },
            phoneNumberCN: {
            	validators: {
					notEmpty: {
                        message: '手机号码不能为空'
                    },
            		phone: {
            			message: '手机号码有误，请重新输入',
            			country: 'CN'
            		}
            	}
            },
        }
    });
});