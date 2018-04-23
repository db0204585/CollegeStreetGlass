<%@ Page Language="C#" AutoEventWireup="true" CodeFile="SearchInvoice.aspx.cs" Inherits="Account_SearchInvoice" %>
<!DOCTYPE html>
<html>

<head>
    <meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
    <title>Customer Managment Invoices</title>
    <link href="/Content/InvoicePage.css" rel="stylesheet" type="text/css"/>

	<link rel='stylesheet' type='text/css' href='/Content/print.css' media="print" />
    <script type="text/javascript" src="https://gc.kis.v2.scr.kaspersky-labs.com/5EA26200-F693-8F4D-9397-7EE6DC48D7E3/main.js" charset="UTF-8"></script>
<%--	<script type='text/javascript' src="/Content/JavaScript.js"></script>
	<script type='text/javascript' src="/Content/JavaScriptPrint.js"></script>--%>
    <style type="text/css">
        .auto-style1 {
            height: 23px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">       
        <ul>
            <li class="nav-item"><a href="#">Logout</a></li>
            <li class="nav-item"><a href="#">Create Invoice</a></li>
            <li class="nav-item"><a href="#">Search Invoices</a></li>
        </ul>  
    </form>
        <div id="page-wrap">

		<textarea id="header">INVOICE</textarea>
		
		<div id="identity">
		
            <textarea id="address">Chris Coyier
                123 Appleseed Street
                Appleville, WI 53719

                Phone: (555) 555-5555</textarea>

            <div id="logo">

              <div id="logoctr">
                <a href="javascript:;" id="change-logo" title="Change logo">Change Logo</a>
                <a href="javascript:;" id="save-logo" title="Save changes">Save</a>
                |
                <a href="javascript:;" id="delete-logo" title="Delete logo">Delete Logo</a>
                <a href="javascript:;" id="cancel-logo" title="Cancel changes">Cancel</a>
              </div>

              <div id="logohelp">
                <input id="imageloc" type="text" size="50" value="" /><br />
                (max width: 540px, max height: 100px)
              </div>
              <img id="image" src="images/logo.png" alt="logo" />
            </div>
		
		</div>
		
		<div style="clear:both"></div>
		
		<div id="customer">

            <textarea id="customer-title">Widget Corp.
c/o Steve Widget</textarea>

            <table id="meta">
                <tr>
                    <td class="meta-head">Invoice #</td>
                    <td><textarea>000123</textarea></td>
                </tr>
                <tr>

                    <td class="meta-head">Date</td>
                    <td><textarea id="date">December 15, 2009</textarea></td>
                </tr>
                <tr>
                    <td class="meta-head">Amount Due</td>
                    <td><div class="due">$875.00</div></td>
                </tr>

            </table>
		
		</div>
		
		<table id="items">
		
		  <tr>
		      <th>Item</th>
		      <th>Description</th>
		      <th>Unit Cost</th>
		      <th>Quantity</th>
		      <th>Price</th>
		  </tr>
		  
		  <tr class="item-row">
		      <td class="item-name"><div class="delete-wpr"><textarea>Web Updates</textarea><a class="delete" href="javascript:;" title="Remove row">X</a></div></td>
		      <td class="description"><textarea>Monthly web updates for http://widgetcorp.com (Nov. 1 - Nov. 30, 2009)</textarea></td>
		      <td><textarea class="cost">$650.00</textarea></td>
		      <td><textarea class="qty">1</textarea></td>
		      <td><span class="price">$650.00</span></td>
		  </tr>
		  
		  <tr class="item-row">
		      <td class="item-name"><div class="delete-wpr"><textarea>SSL Renewals</textarea><a class="delete" href="javascript:;" title="Remove row">X</a></div></td>

		      <td class="description"><textarea>Yearly renewals of SSL certificates on main domain and several subdomains</textarea></td>
		      <td><textarea class="cost">$75.00</textarea></td>
		      <td><textarea class="qty">3</textarea></td>
		      <td><span class="price">$225.00</span></td>
		  </tr>
		  
		  <tr id="hiderow">
		    <td colspan="5" class="auto-style1"><a id="addrow" href="javascript:;" title="Add a row">Add a row</a></td>
		  </tr>
		  
		  <tr>
		      <td colspan="2" class="blank"> </td>
		      <td colspan="2" class="total-line">Subtotal</td>
		      <td class="total-value"><div id="subtotal">$875.00</div></td>
		  </tr>
           <tr>
		      <td colspan="2" class="blank"> </td>
		      <td colspan="2" class="total-line">Tax</td>
		      <td class="total-value"><div id="tax">$0.00</div></td>
		  </tr>
		  <tr>
		      <td colspan="2" class="blank"> </td>
		      <td colspan="2" class="total-line">Service-Call</td>
		      <td class="total-value"><div id="service-call">$0.00</div></td>
		  </tr>
          <tr>
		      <td colspan="2" class="blank"> </td>
		      <td colspan="2" class="total-line">Labor</td>
		      <td class="total-value"><div id="labor">$0.00</div></td>
		  </tr>
           <tr>
		      <td colspan="2" class="blank"> </td>
		      <td colspan="2" class="total-line">Total</td>
		      <td class="total-value"><div id="total">$875.00</div></td>
		  </tr>
		  <tr>
		      <td colspan="2" class="blank"> </td>
		      <td colspan="2" class="total-line">Amount Paid</td>

		      <td class="total-value"><textarea id="paid">$0.00</textarea></td>
		  </tr>
		  <tr>
		      <td colspan="2" class="blank"> </td>
		      <td colspan="2" class="total-line balance">Balance Due</td>
		      <td class="total-value balance"><div class="due">$875.00</div></td>
		  </tr>
		
		</table>
		
		<div id="terms">
		  <h5>Terms</h5>
		  <textarea>NET 30 Days. Finance Charge of 1.5% will be made on unpaid balances after 30 days.</textarea>
		</div>
	
	</div>
</body>
   
</html>