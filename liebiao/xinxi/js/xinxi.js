window.addEventListener('load',function(){
    var quizQuestions = [{
        "title": "在Word2010中，要使用“格式刷”命令按钮，应该先选择()选项卡。",
        "answer": "开始"
    },
    {
        "title": "将Word2010文档中一部分内容复制到别处，先要进行的操作是()。",
        "answer": "选择"
    },
    {
        "title": "一组连接计算机各部件的公共通信线称为总线，它的组成是()。",
        "answer": "地址线、数据线和控制线"
    },
    {
        "title": "Word2010编辑状态下，若设置了标尺，则水平标尺和垂直标尺同时显示的视图方式为()。",
        "answer": "页面视图"
    },
    {
        "title": "计算机自诞生以来，无论在性能、价格等方面都发生了巨大的变化，但是()并没有发生多大的改变。",
        "answer": "基本工作原理"
    },
    {
        "title": "在Word2010中，对某文档进行编辑，但是没有保存就直接执行“关闭”命令，则以下说法正确的是()。",
        "answer": "系统会弹出提示对话框，询问用户后续操作"
    },
    {
        "title": "在Excel2010的工作表中，当鼠标的形状变为()时，就可进行自动填充操作。",
        "answer": "实心细十字"
    },
    {
        "title": "Excel2010中，若要选中若干个不连续的单元格，可选按住()键，然后逐一用鼠标单击。",
        "answer": "Ctrl"
    },
    {
        "title": "微型计算机中内存储器比外存储器()。",
        "answer": "读写速度快"
    },
    {
        "title": "中国教育科研网全国网络中心设在()，负责全国主干网的运行管理",
        "answer": "清华大学"
    },
    {
        "title": "在Windows中，用户建立的文件默认具有的属性是（）",
        "answer": "存档"
    },
    {
        "title": "只知道服务器的P地址，而没有该服务器的域名，则无法访问该服务器。()",
        "answer": "错误"
    },
    {
        "title": "()的目的是在使用最少的网络资源和具有最小延迟的前提下，确保网络能提供可靠、连接的通信能力，并使网络资源的使用达到最优化的程度。",
        "answer": "性能管理"
    },
    {
        "title": "E-mail地址中@的含义为()",
        "answer": "在"
    },
    {
        "title": "在PowerPoint2010演示文稿中利用“大纲”窗格组织、排列幻灯片中的文字时，输入幻灯片标题后进入下一级文本输入状态的最快捷方法是()。",
        "answer": "按Ctrl+Enter组合键"
    },
    {
        "title": "在Excel2010中，各运算符号的优先级的顺序为（）。",
        "answer": "引用运算符、算术运算符、文本运算符、关系运算符"
    },
    {
        "title": "下列说法正确的是()",
        "answer": "上因特网的计算机必须拥用一个独立的IP地址"
    },
    {
        "title": "在PowerPoint2010中，要同时选择第1、 2、5三张幻灯片，应该在()视图下操作。",
        "answer": "幻灯片浏览"
    },
    {
        "title": "URL的格式是()",
        "answer": "协议：//IP地址或域名/路径/文件名"
    },
    {
        "title": "Excel中时间和日期都可以()，并可以包含到其他运算当中。",
        "answer": "相加、相减"
    },
    {
        "title": "在计算机中指令主要存放在()中",
        "answer": "存储器"
    },
    {
        "title": "在Word2010中，有关“定时自动保存”功能的说法中，正确的是()。",
        "answer": "系统每隔一段时间自动保存在外存中，以避免意外丢失文档内容"
    },
    {
        "title": "在PowerPoint2010中，若使幻灯片播放时，从“盒状展开”效果变换到下一张幻灯片需要设置()。",
        "answer": "幻灯片切换"
    },
    {
        "title": "计算机中对下列几个部件访问速度最快的是()",
        "answer": "主存储器"
    },
    {
        "title": "电话拨号上网是利用现成的电话线路，通过()将计算机连入Internet。",
        "answer": "Modem"
    },
    {
        "title": "一个工作簿里最多可以包含有()张工作表。",
        "answer": "255"
    },
    {
        "title": "网卡的主要功能不包括 ",
        "answer": "网络互连"
    },
    {
        "title": "在PowerPoint2010中，若要更换另一种幻灯片的版式，下列操作正确的是（）",
        "answer": "单击“开始”选项卡→“幻灯片”组中“版式”命令按钮"
    },
    {
        "title": "计算机中正在运行的程序和数据都是保存在计算机的()中。",
        "answer": "内存"
    },
    {
        "title": "在Excel2010中，数字的千位后加千分号“,”,例如230000可以记作()。",
        "answer": "230，000"
    },
    {
        "title": "在Excel2010的数据操作中，计算求和的函数是()",
        "answer": "SUM"
    },
    {
        "title": "下列视图中不属于PowerPoint2010视图的是()。",
        "answer": "页面视图"
    },
    {
        "title": "关于Word编辑页眉页脚，下列叙述()不正确。",
        "answer": "文档内容和页眉页脚可在同一窗口编辑"
    },
    {
        "title": "计算机之所以能按人们的意图自动进行工作，最直接的原因是采用了()。",
        "answer": "存储程序控制"
    },
    {
        "title": "显示或打印汉字时，系统使用的是汉字的()。",
        "answer": "字形码"
    },
    {
        "title": "计算机中用来保存程序和数据，以及运算的中间结果和最后结果的装置是()",
        "answer": "内存和外设"
    },
    {
        "title": "计算机中所有信息的存储都采用()",
        "answer": "二进制"
    },
    {
        "title": "幻灯片中占位符的作用是()",
        "answer": "为文本、图形预留位置"
    },
    {
        "title": "Excel2010中不能实现的运算符是",
        "answer": "等差运算符"
    },
    {
        "title": "在Word2010Word2010中，当文档中插入图片对象后，可以通过设置图片的文字环绕方式进行图文混排，下列哪种方式不是Word提供的文字环绕方式()",
        "answer": "左右型"
    },
    {
        "title": "Excel2010所拥有的视图方式有()",
        "answer": "普通视图;分页预览视图;页面布局;"
    },
    {
        "title": "关于“指令”、“指令系统”，哪一种说法是正确的？()",
        "answer": "指令通常由操作码和操作数组成;操作码规定计算机进行何种操作;基本指令的集合就是指令系统;"
    },
    {
        "title": "以下关于管理Excel2010表格正确的表述是()。",
        "answer": "可以给工作表插入行;可以给工作表插入列;"
    },
    {
        "title": "在修改图形的大小时，若想保持其长宽比例不变，应该怎样操作()。",
        "answer": "按住shift键，同时用鼠标拖动四角上的控制点;在“布局”对话框中，锁定纵横比;"
    },
    {
        "title": "在Excel2010中，下面可用来设置和修改图表的操作有：()。",
        "answer": "改变分类轴中的文字内容;改变系列图标的类型及颜色;改变背景墙的颜色;改变系列类型;"
    },
    {
        "title": "下列关于活动窗口的描述中，不正确的是()。",
        "answer": "光标的插入点在活动窗口中不会闪烁;活动窗口在任务栏上的按钮处于凸出状态;桌面上可以同时有两个活动窗口;"
    },
    {
        "title": "当有多个图形时，需要对它们进行对齐，有哪些方式？()",
        "answer": "左对齐;右对齐;顶端对齐;两端对齐;"
    },
    {
        "title": "在Excel2010工作表中，下列正确的公式形式为()。",
        "answer": "=B3*Sheet3! A2;=B3*$A2;"
    },
    {
        "title": "关于windows7中的“命令提示符”方式，正确的说法是()",
        "answer": "开机后,可以直接进入“命令提示符”的安全模式;通过“开始”按钮中的“程序/附件”菜单可以进入“命令提示符”方式;用“EXIT”命令,可从命令提示符方式回到windows环境;"
    },
    {
        "title": "在Word2010的“剪贴板”命令中包括()。",
        "answer": "剪切;复制;"
    },
    {
        "title": "以下能打开资源管理器的操作是()",
        "answer": "“开始菜单”→“所有程序”→“附件”→“windows资源管理器”;右击开始按钮选择“打开资源管理器”;按“WIN+E”快捷键;"
    },
    {
        "title": "以下属于段落格式的有()",
        "answer": "首行缩进;段前、段后;行距;"
    },
    {
        "title": "在Word2010中保存的文件如何在装有 Word2003的机器上打开？()",
        "answer": "将其保存为“Word 97-2003”格式;在Word 2003的机器上安装“Office文件格式兼容包”软件;"
    },
    {
        "title": "在Word2010中，若想知道文档的字符数，可以应用的方法有()",
        "answer": "审阅”标签下“校对”功能区的“字数统计”按钮; 快捷键Ctrl+Shift+G;"
    },
    {
        "title": "在Word2010中，若光标定位在表格外右侧的行尾处，按Enter键，结果是()。",
        "answer": "光标下移一列;插入一行，表格行数改变;"
    },
    {
        "title": "在Excel2010中，“Delete”和“全部清除”命令的区别在于()。",
        "answer": "Delete仅能删除单元格的内容;清除命令可删除单元格的内容,格式或批注;"
    },
    {
        "title": "在Word2010打印设置中，可以进行以下哪些操作()。",
        "answer": "打印到文件;手动双面打印;按纸型缩放打印;"
    },
    {
        "title": "在Excel2010中，工作表“销售额”中的 B2:H308中包含所有的销售数据，在工作表“汇总”中需要计算机销售总额，可采用哪些方法()。",
        "answer": "在工作表“汇总”中，输入“=SUM(销售额！B2:H308)”;在工作表“销售额”中，选中B2:H308区域，并在名称框输入“sales ”在工作表“汇总”中，输入“=SUM(sales)”;"
    },
    {
        "title": "微型计算机的系统总线通常由()组成",
        "answer": "数据总线;地址总线;控制总线;"
    },
    {
        "title": "在Exce12010中，单元格地址引用的方式有（）。",
        "answer": "相对引用;绝对引用;混合引用;"
    },
    {
        "title": "已在某工作表的A1、B1单元格分别输入了，星期一、星期三，并且已将这两个单元格选定了，现将B1单元格右下角的填充柄向右拖动，请问在C1、D1、E1单元格显示的数据会是：星期四、星期五、星期六。",
        "answer": "错误"
    },
    {
        "title": "在单元格中输入i501S2199310220522,默认情况会显示1.50102E+17。",
        "answer": "正确"
    },
    {
        "title": "显示器是一种输出设备。",
        "answer": "正确"
    },
    {
        "title": "在Word编辑状态下，若当前的文本处于竖排状态，当选定若干文字后用鼠标左键单击“更改文字方向”按钮，则文档中的所有文字均变成横排状态。",
        "answer": "正确"
    },
    {
        "title": "窗口最小化是指关闭该窗口。",
        "answer": "错误"
    },
    {
        "title": "在PowerPoint2010的幻灯片放映过程中，要回到上一张幻灯片，可以按Page Up键。",
        "answer": "正确"
    },
    {
        "title": "Excel2010工作簿由多个工作表组成，每个工作表是独立的表对象，所以不能同时对多个工作表进行操作。",
        "answer": "错误"
    },
    {
        "title": "拆分文档窗口是将口拆分为两个，而不是将文档拆分为两个文档，在这两个窗口中对文档进行的编辑处理对文档都会产生影响。",
        "answer": "正确"
    },
    {
        "title": "操作系统的功能之一是提高计算机的运行速度。",
        "answer": "错误"
    }
    ]
    
    var searchInput = document.getElementById('search-input');
    var searchButton = this.document.querySelector('#search-button');
    var searchResults = document.getElementById('search-results');
    console.log(searchButton);
    searchButton.addEventListener('click', function () {
        performSearch();
        searchInput.value = ''
    });
    
    searchInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            performSearch();
            searchInput.value = ''
        }
    });
    
    function performSearch() {
        var keyword = searchInput.value.trim();
    
        // Clear previous search results
        searchResults.innerHTML = '';
    
        if (keyword.length > 0) {
            // Create a regular expression with the search keyword
            var regex = new RegExp(keyword, 'gi');
    
            // Iterate through the quiz questions and check for matches
            quizQuestions.forEach(function (question) {
                if (question.title.match(regex)) {
                    // Create result elements and append them to the search results container
                    var resultContainer = document.createElement('div');
                    resultContainer.className = 'result';
    
                    var titleElement = document.createElement('div');
                    titleElement.className = 'title';
                    titleElement.textContent = question.title;
                    resultContainer.appendChild(titleElement);
    
                    var answerElement = document.createElement('div');
                    answerElement.textContent = 'Answer: ' + question.answer;
                    resultContainer.appendChild(answerElement);
    
                    searchResults.appendChild(resultContainer);
                    
                }
            });
        }
    }
})