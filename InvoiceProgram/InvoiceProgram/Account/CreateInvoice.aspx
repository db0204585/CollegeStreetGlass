<%@ Page Language="C#" AutoEventWireup="true" CodeFile="CreateInvoice.aspx.cs" Inherits="Account_CreateInvoice" %>
<!DOCTYPE html>
<html>
<head runat="server">
    <meta charset="utf-8">
	<title>Invoice</title>
	<link rel="stylesheet" href="/Content/invoice.css">
    <script src="/Scripts/invoice.js" type="text/javascript"></script>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <nav>
                  <ul>
                    <li class="nav-item"><a href="#">Logout</a></li>
                    <li class="nav-item"><a href="/Account/CreateInvoice.aspx">Create Invoice</a></li>
                    <li class="nav-item"><a href="#">Search Invoices</a></li>
                  </ul>  
              </nav>
        </div>
    </form>
    <header>
			<h1>Invoice</h1>
            <img src="/logo.png" alt="Logo">
			<address contenteditable>
				<p>College Street Glass and Screen</p>
                <p>417-414-1519</p> 
				<p>1005 W College St.<br>Springfield, MO 65806</p>    
			</address>
			
		</header>
		<article>
			<h1>Recipient</h1>
			<address contenteditable>
				<p>Some Company<br>c/o Some Guy</p>
			</address>
			<table class="meta">
				<tr>
					<th><span contenteditable>Invoice #</span></th>
					<td><span contenteditable>101138</span></td>
				</tr>
				<tr>
					<th><span contenteditable>Date</span></th>
					<td><span contenteditable>January 1, 2012</span></td>
				</tr>
				<tr>
					<th><span contenteditable>Amount Due</span></th>
					<td><span id="prefix" contenteditable>$</span><span>0.00</span></td>
				</tr>
			</table>
			<table class="inventory">
				<thead>
					<tr>
						<th><span contenteditable>Item</span></th>
                        <th><span contenteditable>Description</span></th>
						<th><span contenteditable>Rate</span></th>
						<th><span contenteditable>Quantity</span></th>
						<th><span contenteditable>Price</span></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><a class="cut">-</a><span contenteditable></span></td>
						<td><span contenteditable></span></td>
						<td><span data-prefix="">$</span><span contenteditable>0.00</span></td>
						<td><span contenteditable>4</span></td>
						<td><span data-prefix="">$</span><span>0.00</span></td>
					</tr>
				</tbody>
			</table>
			<a class="add">+</a>
			<table class="balance">
			<tr>
					<th><span contenteditable>Sub-Total</span></th>
					<td><span data-prefix="">$</span><span>0.00</span></td>
				</tr>
                <tr>
					<th><span contenteditable>Tax 7.60%</span></th>
					<td><span data-prefix="">$</span><span>0.00</span></td>
				</tr>
                <tr>
					<th><span contenteditable>Labor</span></th>
					<td id="labor"><span data-prefix="">$</span><span contenteditable>0.00</span></td>
				</tr>
                <tr>
					<th><span contenteditable>Service Call</span></th>
					<td><span data-prefix="">$</span><span contenteditable>0.00</span></td>
				</tr>
                <tr>
					<th><span contenteditable>Amount Paid</span></th>
					<td><span data-prefix="">$</span><span contenteditable>0.00</span></td>
				</tr> 
                 <tr>
					<th><span contenteditable>Total</span></th>
					<td><span data-prefix="">$</span><span>0.00</span></td>
				</tr> 
				<tr>
					<th><span contenteditable>Balance Due</span></th>
					<td><span data-prefix="">$</span><span>0.00</span></td>
				</tr>
			</table>
		</article>
		<aside>
		    <h4><span>Thank you for your business</span></h4>
		</aside>

</body>
</html>
