---
to: <%=name%>/frame/.content.xml
---
<?xml version="1.0" encoding="UTF-8"?>
<jcr:root xmlns:sling="http://sling.apache.org/jcr/sling/1.0" xmlns:jcr="http://www.jcp.org/jcr/1.0" xmlns:granite="http://www.adobe.com/jcr/granite/1.0"
    jcr:primaryType="nt:unstructured"
    sling:resourceType="<%=h.appsRelativePath(cwd, name)%>/frame"
    sling:resourceSuperType="<%=h.appsRelativePath(cwd, name)%>/components/page"
    jcr:title="<%=title%>">
</jcr:root>