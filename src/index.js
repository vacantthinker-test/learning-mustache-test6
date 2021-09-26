import parseTemplate from "./parseTemplate";
import renderTemplate from "./renderTemplate";

window.MyTemplateEngine = {
    render: function(template, data){
        let tokens = parseTemplate(template)
        return renderTemplate(tokens, data)
    }
}