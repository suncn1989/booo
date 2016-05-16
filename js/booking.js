//tabs
$(document).ready(function () 
{
	$('ul.nav > li').click(function (e) 
	{
		e.preventDefault();
		$('ul.nav > li').removeClass('active');
		$(this).addClass('active');
	});
});


//selections
$(function ()
{
	var eles = [
					[
						{ ele: 
								{ 
									type: 'select', 
									name: 'province', 
									title: '省:', 
									withNull: true, 
									items: [
												{ text: '广东', value: 'GuangDong', extendAttr: { id: 1000 } }, 
												{ text: '湖南', value: 'HuNan', extendAttr: { id: 2000 } }
											]
								} 
						},
                        { ele: 
								{ 
									type: 'select', 
									name: 'city', 
									title: '市:', 
									withNull: true, 
									items: [
												{ "text": "广州", "value": "GuangZhou", "extendAttr": { "id": "1000001", "parentId": "1000" } },
												{ "text": "花都", "value": "HuaDu", "extendAttr": { "id": "1000002", "parentId": "1000" } }, 
												{ "text": "邵阳", "value": "ShaoYang", "extendAttr": { "id": "2000001", "parentId": "2000" } }, 
												{ "text": "长沙", "value": "ChangSha", "extendAttr": { "id": "2000002", "parentId": "2000" } }
											] 
								}
						},
                        { ele: 
								{ 
									type: 'select',
									name: 'region', title: '区:',
									withNull: true,
									items: [
												{ "text": "天河区", "value": "TH", "extendAttr": { "id": "1000001001", "parentId": "1000001" } },
												{ "text": "海珠区", "value": "HZ", "extendAttr": { "id": "1000001002", "parentId": "1000001" } },
												{ "text": "越秀区", "value": "YX", "extendAttr": { "id": "1000001003", "parentId": "1000001" } },
												{ "text": "白云区", "value": "BY", "extendAttr": { "id": "1000001004", "parentId": "1000001" } },
												{ "text": "花都区", "value": "HD", "extendAttr": { "id": "1000002001", "parentId": "1000002" } },
												{ "text": "aa县", "value": "aa", "extendAttr": { "id": "2000001001", "parentId": "2000001" } },
												{ "text": "望城区", "value": "wc", "extendAttr": { "id": "2000002001", "parentId": "2000002" } },
												{ "text": "雨花区", "value": "yh", "extendAttr": { "id": "2000002002", "parentId": "2000002" } }
											]
								}
						},
                  ]
            ];
            var bsForm = new BSForm({ eles: eles,autoLayout: true }).Render('formContainer', function (sf) {
                //编辑页面的绑定
                sf.InitFormData({
                    province: 'GuangDong',
                    city: 'GuangZhou',
                    region:'TH'
                });
                //必须先赋值再生成插件
                global.Fn.CascadeSelect({ targets: ['province', 'city', 'region'], primaryKey: 'data-id', relativeKey: 'data-parentId' });
            });
});