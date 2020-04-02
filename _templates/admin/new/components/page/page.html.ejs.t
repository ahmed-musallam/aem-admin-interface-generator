---
to: <%=name%>/components/page/page.html
---
<!DOCTYPE html>
<html style="height:100%">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><%=title%></title>
    <sly data-sly-set.clientlibPath="/apps/<%=h.appsRelativePath(cwd, name)%>/components/page/clientlib"></sly>
    <link rel="stylesheet" href="${clientlibPath}.min.css">
</head>
<body class="coral--light u-coral-padding">
  <h1><%=title%></h1>
  <coral-alert>
    <coral-alert-header>Info</coral-alert-header>
    <coral-alert-content>Your custom Application goes here!</coral-alert-content>
  </coral-alert>
  <!--/* have to use script because data-coral-icons */-->
  <script src="${clientlibPath}.min.js" data-coral-icons="${clientlibPath}/resources"></script>
</body>
</html>