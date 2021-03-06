var np = {}; // 主程序对象
np.config = {
  'appContainer': '.notepad-app'
};

np.fontFamily = 'Arial'; // 默认字体
np.fontStype = '常规';  // 默认字体样式
np.fontSize = '16';    // 默认字体大小：16pt

np.fontHandler = function(e) {
  np.fontFamily = e.family;
  np.fontStype = e.style;
  np.fontSize = e.size;
  $editor.setFont(e);
};

$(function() {
  $menuBar.show(np.menuData);
  $editor.show({
    contentHandler: function(isEmpty) {
      $menuBar.enabled(1,6,isEmpty);
    }
  });
  $editor.setFont({
    family: np.fontFamily,
    style: np.fontStype,
    size: np.fontSize
  });
  
  $('body').click(function() {
    $menuBar.hideMenu();
    $editor.focus();
  });
});

np.menuData = [
    { 
        title: '文件(F)',
        menuItems: [  
            {
                title: '新建(N)',
                shortcut: 'Ctrl+N',
                enabled: true,
                handler: function() { 
                    console.log('新建(N) clicked!'); 
                }
            },
            {
                title: '新窗口(W)',
                shortcut: 'Ctrl+Shift+N',
                enabled: true,
                handler: function() { 
                    console.log('新窗口(W) clicked!'); 
                }
            },
            {
                title: '打开(O)...',
                shortcut: 'Ctrl+O',
                enabled: true,
                handler: function() { 
                    console.log('打开(O) clicked!'); 
                }
            },
            {
                title: '保存(S)',
                shortcut: 'Ctrl+S',
                enabled: true,
                handler: function() { 
                    console.log('保存(S) clicked!'); 
                }
            },
            {
                title: '另存为(A)...',
                shortcut: 'Ctrl+Shift+S',
                enabled: true,
                handler: function() { 
                    console.log('另存为(A) clicked!'); 
                }
            },
            {
                title: 'hr',
                shortcut: '',
                enabled: true,
                handler: null
            },
            {
                title: '页面设置(U)...',
                shortcut: '',
                enabled: true,
                handler: function() { 
                    console.log('页面设置(U) clicked!'); 
                }
            },
            {
                title: '打印(P)...',
                shortcut: 'Ctrl+P',
                enabled: true,
                handler: function() { 
                    console.log('打印(P) clicked!'); 
                }
            },
            {
                title: 'hr',
                shortcut: '',
                enabled: true,
                handler: null
            },
            {
                title: '退出(X)',
                shortcut: '',
                enabled: true,
                handler: function() { 
                    console.log('退出(X) clicked!'); 
                }
            }
        ],
        width: '202px',
        left: '0px'
    },
    { 
        title: '编辑(E)',
        menuItems: [
            {
                title: '撤销(U)',
                shortcut: 'Ctrl+Z',
                enabled: false,
                handler: function() { 
                    console.log('撤销(U) clicked!'); 
                }
            },
            {
                title: 'hr',
                shortcut: '',
                enabled: true,
                handler: null
            },
            {
                title: '剪切(T)',
                shortcut: 'Ctrl+X',
                enabled: true,
                handler: function() { 
                    console.log('剪切(X) clicked!'); 
                }
            },
            {
                title: '复制(C)',
                shortcut: 'Ctrl+C',
                enabled: false,
                handler: function() { 
                    console.log('复制(C) clicked!'); 
                }
            },
            {
                title: '粘贴(P)',
                shortcut: 'Ctrl+V',
                enabled: true,
                handler: function() { 
                    console.log('粘贴(P) clicked!'); 
                }
            },
            {
                title: '删除(L)',
                shortcut: 'Del',
                enabled: false,
                handler: function() { 
                    console.log('删除(L) clicked!'); 
                }
            },
            {
                title: 'hr',
                shortcut: '',
                enabled: true,
                handler: null
            },
            {
                title: '使用 Bing 搜索...',
                shortcut: 'Ctrl+E',
                enabled: true,
                handler: function() { 
                    console.log('使用 Bing 搜索 clicked!'); 
                }
            },
            {
                title: '查找(F)...',
                shortcut: 'Ctrl+F',
                enabled: false,
                handler: function() { 
                    console.log('查找(F) clicked!'); 
                }
            },
            {
                title: '查找下一个(N)',
                shortcut: 'F3',
                enabled: false,
                handler: function() { 
                    console.log('查找下一个(N) clicked!'); 
                }
            },
            {
                title: '查找上一个(V)',
                shortcut: 'Shift+F3',
                enabled: false,
                handler: function() { 
                    console.log('查找上一个(V) clicked!'); 
                }
            },
            {
                title: '替换(R)...',
                shortcut: 'Ctrl+H',
                enabled: true,
                handler: function() { 
                    console.log('替换(R) clicked!'); 
                }
            },
            {
                title: '转到(G)...',
                shortcut: 'Ctrl+G',
                enabled: true,
                handler: function() { 
                    console.log('转到(G) clicked!'); 
                }
            },
            {
                title: 'hr',
                shortcut: '',
                enabled: true,
                handler: null
            },
            {
                title: '全选(A)',
                shortcut: 'Ctrl+A',
                enabled: true,
                handler: function() { 
                    console.log('全选(A) clicked!'); 
                }
            },
            {
                title: '时间/日期(D)',
                shortcut: 'F5',
                enabled: true,
                handler: function() { 
                    console.log('时间/日期(D) clicked!'); 
                }
            },
        ],
        width: '218px',
        left: '52px'
    },
    { 
        title: '格式(O)',
        menuItems: [
            {
                title: '自动换行(W)',
                shortcut: '',
                enabled: true,
                handler: function() { 
                    console.log('自动换行(W) clicked!'); 
                }
            },
            {
                title: '字体(F)...',
                shortcut: '',
                enabled: true,
                handler: function() {
                    $dlgFont.show({
                        family: np.fontFamily,
                        style: np.fontStyle,
                        size: np.fontSize,
                        okHandler: np.fontHandler
                    });
                }
            }
        ],
        width: '156px',
        left: '106px'
    },
    { 
        title: '查看(V)',
        menuItems: [
            {
                title: '缩放(Z)',
                shortcut: '',
                enabled: true,
                handler: function() { 
                    console.log('缩放(Z) clicked!'); 
                }
            },
            {
                title: '状态栏(S)',
                shortcut: '',
                enabled: true,
                handler: function() { 
                    console.log('状态栏(S) clicked!'); 
                }
            }
        ],
        width: '138px',
        left: '162px'
    },
    { 
        title: '帮助(H)',
        menuItems: [
            {
                title: '查看帮助(H)',
                shortcut: '',
                enabled: true,
                handler: function() { 
                    console.log('查看帮助(H) clicked!'); 
                }
            },
            {
                title: '发送反馈(F)',
                shortcut: '',
                enabled: true,
                handler: function() { 
                    console.log('发送反馈(F) clicked!'); 
                }
            },
            {
                title: '关于记事本(A)',
                shortcut: '',
                enabled: true,
                handler: function() { 
                    console.log('关于记事本(A) clicked!');
                }
            },
        ],
        width: '166px',
        left: '216px'
    }
  ];
var $dlgFont =(function(){
    var $dlg = $(''
        +'<div class="notepad-dlg-font">'
            +'<div class="dialogbox">'
                +'<div class="titlebar">'
                    +'<p class="title">字体</p>'
                    +'<span class="close-btn" title="关闭">✖</span>'
                +'</div>'
                +'<div class="main">'
                    +'<div class="font-family"><p>字体(F):</p></div>'
                    +'<div class="font-style"><p>字形(Y):</p></div>'
                    +'<div class="font-size"><p>大小(S):</p></div>'
                    +'<fieldset class="sample">'
                        +'<legend>示例</legend>'
                        +'<p class="sample-txt">AaBbYyZz</p>'
                    +'</fieldset>'
                    +'<div class="script">'
                        +'<label>'
                            +'脚本(R):<br>'
                            +'<select>'
                                +'<option value="西欧语言">西欧语言</option>'
                                +'<option value="中文 GB2312">中文 GB2312</option>'
                            +'</select>'
                        +'</label>'
                    +'</div>'
                    +'<input class="ok" type="button" value="确定">'
                    +'<input class="cancel" type="button" value="取消">'
                +'</div>'
            +'</div>'
        +'</div>');
    var $close = $dlg.find('.close-btn'),
        $cancel = $dlg.find('.cancel'),
        $ok = $dlg.find('.ok'),
        $sample = $dlg.find('.sample-txt'),
        $titlebar = $dlg.find('.titlebar');
    
    var fonts = ['Agency FB','Algerian','Arial','Arial Rounded MT','Axure Handwriting','Bahnschrift','Baskerville Old Face','Bauhaus 93', 'Bell MT', 'Berlin Sans FB', 'Bernard MT', 'BlackAdder ITC'],
        styles = ['常规','斜体','粗体','粗偏斜体'],
        sizes = ['8','9','10','11','12','14','16','18','20','22','24','26','28','36','48','72'];
    
    var cfg = {
        family: 'Arial',
        style: '常规',
        size: '16',
        okHandler: null
    };

    function close(){ 
        $dlg.remove();
    }
    //设置示例文字样式
    function sample(){
        $sample.css({ 
            'font-family':cfg.family, 
            'font-size':cfg.size+'pt' 
        });
    
        if(cfg.style == '斜体'){
            $sample.css({'font-style':'italic'});
            return;
        }
        if(cfg.style == '粗体'){
            $sample.css({'font-weight':'bold'});
            return;
        }
        if(cfg.style == '粗偏斜体'){
            $sample.css({
                'font-weight':'bold', 
                'font-style':'italic'
            });
            return;
        }
    }
    
    function init(){
        var listFamily = new comList();
        listFamily.show({
            container: '.font-family',
            width: '175px',
            list: fonts,
            select: fonts.indexOf(cfg.family),
            isFont: true,
            selectHandler: function(e){
                cfg.family = fonts[e];
                sample();
            }
        });
    
        var listStyle = new comList();
        listStyle.show({
            container: '.font-style',
            width: '135px',
            list: styles,
            select: styles.indexOf(cfg.style),
            isFontStyle: true,
            selectHandler: function(e){
                cfg.style = styles[e];
                sample();
            }
        });
    
        var listSize = new comList();
        listSize.show({
            container: '.font-size',
            width: '65px',
            list: sizes,
            select: sizes.indexOf(cfg.size),
            selectHandler: function(e) {
                cfg.size = sizes[e];
                sample();
            }
        });
    
        sample();
    }

    function show(conf){
        $.extend(cfg,conf);
        $('body').append($dlg);
        init();
        $dlg.find('.dialogbox').draggable({handle: $titlebar});
        
        $close.click(close);
        $cancel.click(close);
        
        $ok.click(function(){
            cfg.okHandler({
                family: cfg.family,
                style: cfg.style,
                size: cfg.size
            });
            close();
        });
        $dlg.click(function(e){
            e.stopPropagation();
        });
    }

    return{
        show:show
    }
}());

var $editor = (function(){
    var $html = $(''
        + '<div class="notepad-editor">'
            + '<textarea spellcheck="false" auto-size="none"></textarea>'
        + '</div>');
  
    var $textArea = $html.find('textarea'),
        cfg = {contentHandler: null};
  
    function focus(){
        $textArea.focus();
    }
  
    $textArea.keyup(function(){
        cfg.contentHandler($textArea.val() != '');
    });
  
    function setFont(e){
        $textArea.css({
            'font-family':e.family, 
            'font-size':e.size + 'pt'
        });
        if(e.style == '斜体'){
            $textArea.css({'font-style':'italic'});
            return;
        }
        if(e.style == '粗体'){
            $textArea.css({'font-weight':'bold'});
            return;
        }
        if(e.style == '粗偏斜体'){
            $textArea.css({
                'font-weight':'bold', 
                'font-style':'italic'
            });
            return;
        }
    }
  
    function show(conf){
        $.extend(cfg,conf);
        $('body').append($html);
        $textArea.trigger('focus');
    }
  
    return{
        show: show,
        focus: focus,
        setFont: setFont
    };
}());
function comList(){
    var $comList = $(''
        +'<div class="notepad-com-list">'
            +'<input class="editor" type="text"><br>'
            +'<ul class="list">'
            +'</ul>'
        + '</div>');
  
    var $editor = $comList.find('.editor'),
        $list = $comList.find('.list'),
        $items;
  
    var cfg = {
        container: '',
        list: [],
        select: 0,
        width: '200px',
        isFont: false,
        isFontStyle: false,
        selectHandler: null
    };
  
    function setFontStyle(item,style){
        if(style == '斜体'){
            item.css({'font-style':'italic'});
            return;
        }
        if(style == '粗体'){
            item.css({'font-weight':'bold'});
            return;
        }
        if(style == '粗偏斜体'){
            item.css({
                'font-weight':'bold',
                'font-style':'italic'
            });
            return;
        }
    }
  
    function fillData(){
        var i = 0, $item;
        //设置字体
        if(cfg.isFont){
            for(i=0; i<cfg.list.length; i++){
                $item = $('<li class="item"></li>');
                $item.css({'font-family':cfg.list[i]});
                $list.append($item.html(cfg.list[i]));
            }
        } 
        //设置字形
        else if(cfg.isFontStyle){
            for(i=0; i<cfg.list.length; i++){
                $item = $('<li class="item"></li>');
                setFontStyle($item,cfg.list[i]);
                $list.append($item.html(cfg.list[i]));
            }
        } 
        //设置大小
        else{
            for(i=0; i<cfg.list.length; i++){
                $item = $('<li class="item"></li>');
                $list.append($item.html(cfg.list[i]));
            }
        }
        $items = $list.find('.item');
    }
  
    function setSelect(n){
        $($items[n]).addClass('selected');
        $editor.val(cfg.list[n]);
        $editor.select();
    }
  
    function init(){
        var $oldList = $(cfg.container).find('.notepad-com-list');
        if($oldList.length != 0){
            $oldList.remove();
        }
        $(cfg.container).append($comList);
        $comList.css({ width:cfg.width });
        fillData();
        setSelect(cfg.select);
    }
  
    this.show = function(conf){
        $.extend(cfg,conf);
        init();
    
        $list.click(function(e){
            $($items[cfg.select]).removeClass('selected');
            cfg.select = cfg.list.indexOf($(e.target).html());
            $($items[cfg.select]).addClass('selected');
            $editor.val(cfg.list[cfg.select]);
            $editor.select();
            cfg.selectHandler(cfg.select);
        });
  
        $editor.keyup(function(){
            var i = 0;
            for(i=0; i<cfg.list.length; i++){
                if(cfg.list[i].indexOf($editor.val()) === 0) 
                    break;
            }
    
            if(i == cfg.list.length) 
                return;
    
            $items[i].scrollIntoView({behavior: 'smooth', block: 'start'});
            $($items[cfg.select]).removeClass('selected');
            $($items[i]).addClass('selected');
            cfg.select = i;
        });
    };
}
var $menuBar =(function(){
    var $bar = $('<div class="notepad-menubar"></div>'),
        menuData,           // 所有菜单数据
        menus = [];         // 存放五个下拉菜单
    /* 
        下拉菜单是否展开，没有展开为：-1
        展开为：n，n代表展开的是第几个菜单
        0是文件菜单，1是编辑菜单，2是格式菜单
        3是查看菜单，4是帮助菜单 
    */
    var active = -1;

    function createMenuTitle(){
        var $titles = $('<ul class="menu-title"></ul>');

        for(var i=0; i<menuData.length; i++){
            var $title = $('<li class="title"></li>');
            $title.html(menuData[i].title);
            $title.attr('data-id', i);
            $titles.append($title);
            $title.click(function(e){
                var i = Number(this.dataset.id);
                if(active == -1){
                    menus[i].css({ display:'inline-block' });
                    active = i;
                } 
                else if(active != i){
                    menus[active].css({ display: 'none' });
                    menus[i].css({ display:'inline-block' });
                    active = i;
                } 
                else{
                    menus[active].css({ display:'none' });
                    active = -1;
                }
                e.stopPropagation();
            });

            $title.hover(function(){
                if(active != -1){
                    var i = Number(this.dataset.id);
                    menus[active].css({ display:'none' });
                    menus[i].css({ display:'inline-block' });
                    active = i;
                }
            });
        }
        $bar.append($titles);
    }

    function createMenus(){
        for(var i=0; i<menuData.length; i++){
            var $menus = $('<ul class="menus"></ul>'),
                items = menuData[i].menuItems;

            for(var j=0; j<items.length; j++){
                if(items[j].title == 'hr'){
                    var $hr = $('<li class="menu-hr"></li>');
                    $menus.append($hr);
                    continue;
                }
                var $menu = $('<li class="menu-item"></li>');
                $menu.html(items[j].title);
                $menu.attr('data-x', i);
                $menu.attr('data-y', j);
                if(items[j].shortcut != ''){
                    var $shorcut = $('<span class="shortcut"></span>');
                    $shorcut.html(items[j].shortcut);
                    $menu.append($shorcut);
                }
                if(!items[j].enabled){
                    $menu.addClass('disabled');
                }
                $menus.append($menu);
                $menu.click(function(e){
                    e.stopPropagation();
                    if($(this).hasClass('disabled')) 
                        return;
                    var i = this.dataset.x, 
                        j = this.dataset.y;

                    menus[i].css({ display:'none' });
                    active = -1;
                    menuData[i].menuItems[j].handler();
                });
            }

            $menus.css({
                width: menuData[i].width,
                left: menuData[i].left,
                display: 'none'
            });
            $bar.append($menus);
            menus.push($menus);
        }
    }

/*
    设置菜单项为启用或禁用状态
    row[0-4] 代表文件、编辑、格式、查看、帮助五个菜单栏
    col 代表第几个下拉菜单项
    isEnabled true 为启用，false 为禁用
*/
    function enabled(row,col,isEnabled){
        var menuItem = menus[row].find('.menu-item')[col];
        if(isEnabled){
            $(menuItem).removeClass('disabled');
        } 
        else{
            $(menuItem).addClass('disabled');
        }
    }

    function hideMenu(){
        if(active === -1) {
            return;
        }
    
        menus[active].css({display:'none'});
        active = -1;
    }

    function show(data){
        menuData = data;
        createMenuTitle();
        createMenus();
        $('body').append($bar);
    }

    return{
        show: show,
        enabled: enabled,
        hideMenu: hideMenu
    };
}());
