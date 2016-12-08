; 
function show(page) {
	
	
					if (page == undefined) {
						page = 1;
					};
					function sho(data){
						$("#el-tabl").html("");
						var dataArr = data.itemGroup;
							var btn = "<div class='btn-toolbar btn-group' role='toolbar' aria-label='...'>";
							var countnum = Math.ceil(data.itemGroup.length / 8); //总页数
							for (var j = 1; j <= countnum; j++) {
								btn += "<button type='button' class='btn btn-default'>" + j + "</button>"
							};
							btn += "</div>";
							$("#el-table-footer").html(btn);
							var i = 0;
							i = (page - 1) * 8;
							var num = page * 8 - 1;
							
							var $tr = $("<tr></tr>");
							$.each(dataArr,function(index,item){
								$tr = $("<tr></tr>");
								$.each(item,function(key,value){
									
									var $td=$("<td>"+value+"</td>")
									$tr.append($td);
								});
								$tr.append($("<td><button type='button' class='btn btn-primary' style='margin-right:10px'>编辑</button><button type='button' class='btn btn-danger'>删除</button></td>"))
								$("#el-tabl").append($tr);
							});
							
							
							
//							for (i; i <= num; i++) {
//								if (i == data.itemGroup.length) {
//									break;
//								};
//								text += "<tr><td>" + data.itemGroup[i].id + "</td>";
//								text += "<td >" + data.itemGroup[i].name + "</td>";
//								text += "<td>" + data.itemGroup[i].idCard + "</td>";
//								text += "<td>" + data.itemGroup[i].phone + "</td>";
//								text += "<td>" + data.itemGroup[i].city + "</td>";
//								text += "<td>" + data.itemGroup[i].status + "</td>";
//								text += "<td><button type='button' class='btn btn-primary' style='margin-right:10px'>编辑</button><button type='button' class='btn btn-danger'>删除</button></td>";
//							}
//							$("#el-tabl").html(text);
					}
					
					$.ajax({
						type: "get",
						async: false,
						dataType: "jsonp",
						url: "http://127.0.0.1:3000/mockapi",
						success: function(data) {
							sho(data);
						}
					});
				}