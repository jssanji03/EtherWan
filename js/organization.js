
        // var data = {
        //     "data": [{
        //         "id": 1,
        //         "Dept":"總經理",
        //         "name": "Tony",
        //         "level": 0,
        //         "childrens": [
        //             {
        //                 "id": 2,
        //                 "Dept":"Business Dept.",
        //                 "name": "Charlie",
        //                 "level": 1,
        //                 "childrens": [
        //                 {
        //                     "id": 5,
        //                     "Dept":".Net",
        //                     "name": "Kerry",
        //                     "level": 2,
        //                     "childrens": [
        //                         {
        //                             "id": 10,
        //                             "name": "person1",
        //                             "level": 5,
        //                             "childrens": []
        //                         },
        //                         {
        //                             "id": 11,
        //                             "name": "person2",
        //                             "level": 5,
        //                             "childrens": []
        //                         },
        //                         {
        //                             "id": 12,
        //                             "name": "person3",
        //                             "level": 5,
        //                             "childrens": []
        //                         }]
        //                 },
        //                 {
        //                     "id": 6,
        //                     "Dept":"Dept.",
        //                     "name": "Gary",
        //                     "level": 2,
        //                     "childrens": [
        //                         {
        //                             "id": 13,
        //                             "name": "person4",
        //                             "level": 6,
        //                             "childrens": []
        //                         }]
        //                     }
        //                 ]
        //             },
        //             {
        //                 "id": 3,
        //                 "Dept":"SAP Dept.",
        //                 "name": "SAP",
        //                 "level": 1,
        //                 "childrens": [
        //                     {
        //                         "id": 7,
        //                         "Dept":"Dept.",
        //                         "name": "OOO",
        //                         "level": 2,
        //                         "childrens": [{
        //                             "id": 14,
        //                             "name": "person5",
        //                             "level": 7,
        //                             "childrens": []
        //                         }]
        //                     },
        //                     {
        //                         "id": 8,
        //                         "Dept":"Dept.",
        //                         "name": "OOO",
        //                         "level": 2,
        //                         "childrens": [{
        //                             "id": 15,
        //                             "name": "person6",
        //                             "level": 8,
        //                             "childrens": []
        //                         }]
        //                     }
        //                 ]
        //             },
        //             {
        //                 "id": 4,
        //                 "Dept":"業務部",
        //                 "name": "Collin",
        //                 "level": 1,
        //                 "childrens": [{
        //                     "id": 9,
        //                     "Dept":"業務部",
        //                     "name": "OOO",
        //                     "level": 2,
        //                     "childrens": [{
        //                         "id": 16,
        //                         "name": "person7",
        //                         "level": 9,
        //                         "childrens": []
        //                     }]
        //                 }]
        //             }
        //         ]
        //     }]
        // }
        var data = {
            "data": [{
                "id": 1,
                "level": 0,
                "Dept": "總經理",
                "position":"General Manager",
                "name": "Tony",
                "pic": "user00.jpeg",
                "count":"10",
                "childrens": [
                    {
                        "id": 2,
                        "level": 1,
                        "Dept": "Business Automation Dept.",
                        "position":"Director",
                        "name": "Charlie",
                        "pic": "user01.jpeg",
                        "count":"20",
                        "childrens": [
                        {
                            "id": 5,
                            "level": 2,
                            "Dept": ".Net",
                            "position":"Manager",
                            "name": "Kerry",
                            "pic": "user02.jpeg",
                            "count":"10",
                            "childrens": [
                                {
                                    "id": 10,
                                    "level": 5,
                                    "pic": "user03.jpeg",
                                    "position":"Development Engineer",
                                    "name": "Person1",
                                    "childrens": [
                                        
                                        ]
                                },
                                {
                                    "id": 11,
                                    "level": 5,
                                    "pic": "user03.jpeg",
                                    "position":"Development Engineer",
                                    "name": "person2",
                                    "childrens": []
                                },
                                {
                                    "id": 12,
                                    "level": 5,
                                    "pic": "user03.jpeg",
                                    "position":"Development Engineer",
                                    "name": "person3",
                                    "childrens": []
                                }]
                        },
                        {
                            "id": 6,
                            "level": 2,
                            "Dept":"Dept.",
                            "name": "Gary",
                            "position":"Manager",
                            "pic": "user02.jpeg",
                            "count":"10",
                            "childrens": [
                                {
                                    "id": 13,
                                    "level": 5,
                                    "pic": "user03.jpeg",
                                    "position":"Development Engineer",
                                    "name": "person4",
                                    "childrens": []
                                },
                            ]
                            },
                        ]
                    },
                    {
                        "id": 3,
                        "level": 1,
                        "Dept":"SAP Dept.",
                        "name": "SAP",
                        "position":"Manager",
                        "pic": "user01.jpeg",
                        "count":"",
                        "childrens": [
                            {
                                "id": 7,
                                "level": 2,
                                "Dept":"Dept.",
                                "name": "OOO",
                                "position":"Manager",
                                "name": "OOO",
                                "pic": "user02.jpeg",
                                "count":"10",
                                "childrens": [{
                                    "id": 14,
                                    "level": 5,
                                    "pic": "user03.jpeg",
                                    "position":"Development Engineer",
                                    "name": "person5",
                                    "childrens": []
                                }]
                            },
                            {
                                "id": 8,
                                "level": 2,
                                "Dept":"Dept.",
                                "position":"Manager",
                                "name": "OOO",
                                "pic": "user02.jpeg",
                                "count":"10",
                                "childrens": [{
                                    "id": 15,
                                    "level": 5,
                                    "pic": "user03.jpeg",
                                    "position":"Development Engineer",
                                    "name": "person6",
                                    "childrens": []
                                }]
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "level": 1,
                        "Dept":"業務部",
                        "position":"Director",
                        "name": "Collin",
                        "pic": "user01.jpeg",
                        "count":"20",
                        "childrens": [{
                            "id": 9,
                            "level": 2,
                            "Dept":"業務部",
                            "position":"Manager",
                            "name": "OOO",
                            "pic": "user02.jpeg",
                            "count":"10",
                            "childrens": [{
                                "id": 16,
                                "level": 5,
                                "pic": "user03.jpeg",
                                "position":"Development Engineer",
                                "name": "person7",
                                "childrens": []
                            }]
                        }]
                    }
                ]
            }]
        }
        function showall(menu_list, parent) {
            $.each(menu_list, function (index, val) {
                console.log(val);
                if (val.childrens.length > 0) {
                    var li = $("<li></li>").addClass("level"+val.level);
                    li.append(
                    `<a class="organization_text" href='javascript:void(0)' onclick=getOrgId(${val.id});>
                        <div class="dept">${val.Dept}</div>
                        <div class="pic">
                            <img src="public/img/organization/${val.pic}">
                        </div>
                        <p class="position">${val.position}</p>
                        <p class="name">${val.name}</p>
                        <p class="count"><i class="fas fa-user"></i>&nbsp; ${val.count}</p>
                    </a>`
                    ).append("<ul></ul>").appendTo(parent);
                    //递归显示
                    showall(val.childrens, $(li).children().eq(1));
                } else {
                   var li = $("<li></li>").addClass("level"+val.level);
                    li.append(
                        `<a class="organization_text" href='javascript:void(0)' onclick=getOrgId(${val.id});>
                        <div class="pic">
                            <img src="public/img/organization/${val.pic}">
                        </div>
                        <p class="position">${val.position}</p>
                        <p class="name">${val.name}</p>
                        </a>
                        `).append("<ul class='grid'></ul>").appendTo(parent);
                }
            });

        }

        var showlist = $("<ul id='org' style='display:none'></ul>");
        showall(data.data, showlist);
        $("#jOrgChart").append(showlist);
        $("#org").jOrgChart({
            chartElement: '#jOrgChart', //指定在某个dom生成jorgchart
            dragAndDrop: false //设置是否可拖动
        });

        function getOrgId(val) {
            // console.log(val);
        }
