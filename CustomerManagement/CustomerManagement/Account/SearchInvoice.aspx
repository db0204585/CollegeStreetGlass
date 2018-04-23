<%@ Page Language="C#" AutoEventWireup="true" CodeFile="SearchInvoice.aspx.cs" Inherits="Account_SearchInvoice" %>
<!DOCTYPE html>
<html>

<head runat="server">
    <title>Customer Managment Invoices</title>
    <link href="/Content/invoice.css" rel="stylesheet" type="text/css"/>
</head>
<body>
    <form id="form1" runat="server">       
              <ul>
                <li class="nav-item"><a href="#">Logout</a></li>
                <li class="nav-item"><a href="/Account/CreateInvoice.aspx">Create Invoice</a></li>
                <li class="nav-item"><a href="#">Search Invoices</a></li>
              </ul>  
    </form>
    <table>
  <tr>
    <th>Invoices</th>
  </tr>
  <tr>
    <td></td>
  </tr>

</table>
</body>
   
</html>
