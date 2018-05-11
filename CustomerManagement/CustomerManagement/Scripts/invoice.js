﻿/* ========================================================================== */
var totalWithLaborAndService;
var labor;
var taxedPrice;
var service;
var amtPaid;
var afterAmntPaid;
var cusCompany;
var cusName;
var cusPhone;
var item;
var description;
var rate;
var qty;
var price;
var invoiceNum;
var date;
var taxAmount;




(function (document) {
var
    head = document.head = document.getElementsByTagName('head')[0] || document.documentElement,
    elements = 'article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output picture progress section summary time video x'.split(' '),
    elementsLength = elements.length,
    elementsIndex = 0,
    element;

while (elementsIndex < elementsLength) {
    element = document.createElement(elements[++elementsIndex]);
}

element.innerHTML = 'x<style>' +
    'article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}' +
    'audio[controls],canvas,video{display:inline-block}' +
    '[hidden],audio{display:none}' +
    'mark{background:#FF0;color:#000}' +
    '</style>';

return head.insertBefore(element.lastChild, head.firstChild);
})(document);

/* ========================================================================== */

(function (window, ElementPrototype, ArrayPrototype, polyfill) {
    function NodeList() { [polyfill] }
    NodeList.prototype.length = ArrayPrototype.length;

ElementPrototype.matchesSelector = ElementPrototype.matchesSelector ||
    ElementPrototype.mozMatchesSelector ||
    ElementPrototype.msMatchesSelector ||
    ElementPrototype.oMatchesSelector ||
    ElementPrototype.webkitMatchesSelector ||
    function matchesSelector(selector) {
        return ArrayPrototype.indexOf.call(this.parentNode.querySelectorAll(selector), this) > -1;
    };

ElementPrototype.ancestorQuerySelectorAll = ElementPrototype.ancestorQuerySelectorAll ||
    ElementPrototype.mozAncestorQuerySelectorAll ||
    ElementPrototype.msAncestorQuerySelectorAll ||
    ElementPrototype.oAncestorQuerySelectorAll ||
    ElementPrototype.webkitAncestorQuerySelectorAll ||
    function ancestorQuerySelectorAll(selector) {
        for (var cite = this, newNodeList = new NodeList; cite = cite.parentElement;) {
            if (cite.matchesSelector(selector)) ArrayPrototype.push.call(newNodeList, cite);
        }

        return newNodeList;
    };

ElementPrototype.ancestorQuerySelector = ElementPrototype.ancestorQuerySelector ||
    ElementPrototype.mozAncestorQuerySelector ||
    ElementPrototype.msAncestorQuerySelector ||
    ElementPrototype.oAncestorQuerySelector ||
    ElementPrototype.webkitAncestorQuerySelector ||
    function ancestorQuerySelector(selector) {
        return this.ancestorQuerySelectorAll(selector)[0] || null;
    };
})(this, Element.prototype, Array.prototype);

/* Helper Functions
/* ========================================================================== */

function generateTableRow() {
var emptyColumn = document.createElement('tr');

emptyColumn.innerHTML = '<td><a class="cut">-</a><span contenteditable></span></td>' +
    '<td><span contenteditable></span></td>' +
    '<td><span data-prefix>$</span><span contenteditable>0.00</span></td>' +
    '<td><span contenteditable>0</span></td>' +
    '<td><span data-prefix>$</span><span>0.00</span></td>';

return emptyColumn;
}

function parseFloatHTML(element) {
    return parseFloat(element.innerHTML.replace(/[^\d\.\-]+/g, '')) || 0;
}

function parsePrice(number) {
    return number.toFixed(2).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,');
}

/* Update Number
/* ========================================================================== */

function updateNumber(e) {
var
    activeElement = document.activeElement,
    value = parseFloat(activeElement.innerHTML),
    wasPrice = activeElement.innerHTML === parsePrice(parseFloatHTML(activeElement));

if (!isNaN(value) && (e.keyCode === 38 || e.keyCode === 40 || e.wheelDeltaY)) {
    e.preventDefault();

    value += e.keyCode === 38 ? 1 : e.keyCode === 40 ? -1 : Math.round(e.wheelDelta * 0.025);
    value = Math.max(value, 0);

    activeElement.innerHTML = wasPrice ? parsePrice(value) : value;
}

updateInvoice();
}

/* Update Invoice
/* ========================================================================== */

function updateInvoice() {
    var tax = .076;
    var total = 0;


    // update inventory cells
    // ======================

    for (var a = document.querySelectorAll('table.inventory tbody tr'), i = 0; a[i]; ++i) {
        // get inventory row cells
        cells = a[i].querySelectorAll('span:last-child');

        // set price as cell[2] * cell[3]
        price = parseFloatHTML(cells[2]) * parseFloatHTML(cells[3]);

        // add price to total
        total += price;

        // calculate taxes
        taxAmount = total * tax;

        //add taxes to total 
        taxedPrice = total + taxAmount;

        //set row total
        cells[4].innerHTML = price;

        // set item
        //item = cells[4].innerHTML;
    }

    // update balance cells
    // ====================

    // get balance cells
    cells = document.querySelectorAll('table.balance td:last-child span:last-child');

 
    // set subtotal
    cells[0].innerHTML = total;

    // tax amount
    cells[1].innerHTML = taxAmount;

    // set labor price
    labor = cells[2].innerHTML;

    // set service call price
    service = cells[3].innerHTML;

    // set amount paid
    amtPaid = cells[4].innerHTML;

    
   
    

    //// set ballance due
    //cells[6].innerHTML = totalWithLaborAndService - amtPaid;

    // set amount due
     document.querySelector('table.meta tr:last-child td:last-child span:last-child').innerHTML = parsePrice(taxedPrice);

    // update prefix formatting
    // ========================

    var prefix = document.querySelector('#prefix').innerHTML;
    for (a = document.querySelectorAll('[data-prefix]'), i = 0; a[i]; ++i) a[i].innerHTML = prefix;

    // update price formatting
    // =======================

    for (a = document.querySelectorAll('span[data-prefix] + span'), i = 0; a[i]; ++i) if (document.activeElement !== a[i]) a[i].innerHTML = parsePrice(parseFloatHTML(a[i]));

    
    serviceLaborPaid();
}

/* service call Labor amount
/* ========================================================================== */

function serviceLaborPaid() {

    // get balance cells
    cells = document.querySelectorAll('table.balance td:last-child span:last-child');

    //set ballance with labor and service call
    totalWithLaborAndService = +taxedPrice + +labor + +service;

    // set total
    cells[5].innerHTML = totalWithLaborAndService.toFixed(2);

    // set amount due
    document.querySelector('table.meta tr:last-child td:last-child span:last-child').innerHTML = parsePrice(totalWithLaborAndService);

    //Set hidden variables
    //document.getElementById('hdItem').value = item;
    ////document.getElementById('hdDescription').value = description;
    ////document.getElementById('hdRate').value = rate;
    ////document.getElementById('hdQty').value = qty;
    ////document.getElementById('hdInvoiceNum').value = invoiceNum;
    ////document.getElementById('hdDate').value = Date;
    //document.getElementById('hdPrice').value = price;
    //document.getElementById('hdTax').value = taxAmount;
    //document.getElementById('hdSubTotal').value = total
    //document.getElementById('hdLabor').value = labor
    //document.getElementById('hdServiceCall').value = service;
    //document.getElementById('hdAmountPaid').value = amtPaid;
    //document.getElementById('hdTotal').value = totalWithLaborAndService;
    //document.getElementById('hdBallanceDue').value = afterAmntPaid;

    amountPaid();
}

/* service call Labor amount paid total
/* ========================================================================== */

function amountPaid() {

    // get balance cells
    cells = document.querySelectorAll('table.balance td:last-child span:last-child');

    afterAmntPaid = totalWithLaborAndService - amtPaid;

    // set balance
    cells[6].innerHTML = afterAmntPaid.toFixed(2);

    // set amount due
    document.querySelector('table.meta tr:last-child td:last-child span:last-child').innerHTML = parsePrice(afterAmntPaid);

    //Set hidden variables
    //document.getElementById('hdBallanceDue').value = afterAmntPaid;
    //document.getElementById('hdAmoutDue').value = afterAmntPaid;
}

/* On save Invoice
/* ========================================================================== */
function saveInvoice() {
    var save = confirm("Do you want to save the invoice")
    if (save == true) {
        //document.write("Ivoice has been saved")
        return true;
        fillDatabase();
    }
    else {
        document.write("Invoice was not saved")
        return false;
    }
}

/* On Print Invoice
/* ========================================================================== */
function printInvoice() {
    window.print();
}

/* fill database
/* ========================================================================== */
function fillDatabase() {

}

/* On Content Load
/* ========================================================================== */

function onContentLoad() {
    updateInvoice();
    

    var
        input = document.querySelector('input'),
        image = document.querySelector('img');

    function onClick(e) {
        var element = e.target.querySelector('[contenteditable]'), row;

        element && e.target !== document.documentElement && e.target !== document.body && element.focus();

        if (e.target.matchesSelector('.add')) {
            document.querySelector('table.inventory tbody').appendChild(generateTableRow());
        }
        else if (e.target.className === 'cut') {
            row = e.target.ancestorQuerySelector('tr');

            row.parentNode.removeChild(row);
        }

        updateInvoice();
    }

    function onEnterCancel(e) {
        e.preventDefault();

        image.classList.add('hover');
    }

    function onLeaveCancel(e) {
        e.preventDefault();

        image.classList.remove('hover');
    }

    function onFileInput(e) {
        image.classList.remove('hover');

        var
            reader = new FileReader(),
            files = e.dataTransfer ? e.dataTransfer.files : e.target.files,
            i = 0;

        reader.onload = onFileLoad;

        while (files[i]) reader.readAsDataURL(files[i++]);
    }

    function onFileLoad(e) {
        var data = e.target.result;

        image.src = data;
    }

    if (window.addEventListener) {
        document.addEventListener('click', onClick);

        document.addEventListener('mousewheel', updateNumber);
        document.addEventListener('keydown', updateNumber);

        document.addEventListener('keydown', updateInvoice);
        document.addEventListener('keyup', updateInvoice);

        input.addEventListener('focus', onEnterCancel);
        input.addEventListener('mouseover', onEnterCancel);
        input.addEventListener('dragover', onEnterCancel);
        input.addEventListener('dragenter', onEnterCancel);

        input.addEventListener('blur', onLeaveCancel);
        input.addEventListener('dragleave', onLeaveCancel);
        input.addEventListener('mouseout', onLeaveCancel);

        input.addEventListener('drop', onFileInput);
        input.addEventListener('change', onFileInput);
    }
}

window.addEventListener && document.addEventListener('DOMContentLoaded', onContentLoad);
