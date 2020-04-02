---
to: <%=name%>/.content.xml
---
<?xml version="1.0" encoding="UTF-8"?>
<jcr:root xmlns:sling="http://sling.apache.org/jcr/sling/1.0" xmlns:jcr="http://www.jcp.org/jcr/1.0" xmlns:granite="http://www.adobe.com/jcr/granite/1.0"
    jcr:primaryType="nt:unstructured"
    sling:resourceType="<%= h.appsRelativePath(cwd, name)%>"
    sling:resourceSuperType="granite/ui/components/shell/page"
    consoleId="<%=name%>"
    jcr:title="<%=title%>">
    <content
        jcr:primaryType="nt:unstructured"
        sling:resourceType="granite/ui/components/coral/foundation/container">
        <items jcr:primaryType="nt:unstructured">
            <content jcr:primaryType="nt:unstructured"
                sling:resourceType="<%= h.appsRelativePath(cwd, name)%>/components/iframe"/>
        </items>
    </content>
</jcr:root>


