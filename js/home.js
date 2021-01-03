
$.getJSON({
    url: "https://api.jsonbin.io/b/5ff2212b09f7c73f1b6d3fbb/13",
    headers: {"secret-key": "$2b$10$b3LUmenJbN.RnOOzLxliauCFPCKzyh2WmFs/Z0P6z3kE/BiML8PG."}
},(data)=>{
    $.each(data, function(id, groupCurso){
        $("main").append($("<div>").addClass("cursos")
        .append($("<div>").addClass("cursos-title").append($("<p>").text(groupCurso.title)))
        .append($("<div>").addClass("cursos-body").attr("idGroupCurso",groupCurso.id)));

        $.each(groupCurso.cursos,(indice,curso)=>{
            $("[idGroupCurso=" + groupCurso.id + "]").append(
                $("<div>").addClass("curso")
                .append($("<div>").addClass("container-image").append($("<img>").attr("src",curso.image)))
                .append($("<div>").addClass("container-title")
                        .append($("<div>").addClass("title").append($("<p1>").append($("<b>").text(curso.title)))))
                .append($("<div>").addClass("container-autor").append($("<p1>").text(curso.autor)))
                );
        });
    })
});
