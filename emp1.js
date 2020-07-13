<html>
<head>
    <title>Student information </title>
    <script type="text/javascript">
    function calc()
    {
      form=document.getElementById("form1");
      sal=form.sal.value;

      sal=parseFloat(sal);

      form.da.value=(sal*46/100);
     
      form.hra.value=(sal*12/100);

      form.pf.value=(sal*8/100);
      form.pd.value=(sal*8/100);

      d=parseFloat(form.da.value);
      h=parseFloat(form.hra.value);
      p=parseFloat(form.pf.value);
      gs=parseFloat(sal+d+h+p);
      form.gsal.value=parseFloat(gs);
       
      form.tax.value=((gs-p)*20/100);
      t=parseFloat(form.tax.value);
      form.ns.value=parseFloat(gs-(t+p));
    }
</script>
</head>
<body>
<form id="form1">

   <b><i> Program 9. Employee Salary Calculation program.<br /><br /></b></i>
Enter the Name :  <input type="text" size="20" name="name"/><br />
Date of Birth  :  <input type="text" size="20" name="dob"/><br />
Place          :  <input type="text" size="20" name="place"/><br />
Basic Salary   :  <input type="text" size="20" name="sal"/><br />
DA             :  <input type="text" size="20" name="da"/><br />
HRA            :  <input type="text" size="20" name="hra"/><br />
PF             :  <input type="text" size="20" name="pf"/><br />

Gross Salary   :<input type="text" size="20" name="gsal"/><br /> <br />
<b>Deductions  :</b ><br />
TAX            :  <input type="text" size="20" name="tax"/><br />
PF             :  <input type ="text" size="20" name="pd" /> <br /><br/>
<br />
<b><i>Net Salary     :</b></i> <input type="text" size="20" name="ns" /> <br />


<input type="button" name="btn" value="Calculate" onclick="calc()"/><br />
<input type="reset" name="Btn2" value="Reset"/>
</form>
</body>
</html>