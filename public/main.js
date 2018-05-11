

$(document).ready(function () { 
    var $cpf = $("#ingressante_cpf");
    var $dtnasc = $("#ingressante_dtnascimento");
    $cpf.mask('000.000.000-00', {reverse: true});
    $dtnasc.mask('00/00/0000', {reverse: true});

    $(".se-pre-con").fadeOut("slow");;

    $('.select-create').select2({
        style: 'resolve',
        language: {
            "noMatches": function() {
                return "Sem resultados";
            }
        }
    });

    $('.table-datatable').DataTable({
        language: {
            "sEmptyTable": "Nenhum registro encontrado",
            "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
            "sInfoFiltered": "(Filtrados de _MAX_ registros)",
            "sInfoPostFix": "",
            "sInfoThousands": ".",
            "sLengthMenu": "_MENU_ resultados por página",
            "sLoadingRecords": "Carregando...",
            "sProcessing": "Processando...",
            "sZeroRecords": "Nenhum registro encontrado",
            "sSearch": "Pesquisar",
            "oPaginate": {
                "sNext": "Próximo",
                "sPrevious": "Anterior",
                "sFirst": "Primeiro",
                "sLast": "Último"
            },
            "oAria": {
                "sSortAscending": ": Ordenar colunas de forma ascendente",
                "sSortDescending": ": Ordenar colunas de forma descendente"
            }
        }
    });
});
