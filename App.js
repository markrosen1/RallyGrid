//Ext.define('CustomApp' , {
 //   extend: 'Rally.env.Context'
//    componentCls: 'app',
//    launch: function(){
        Ext.create('Rally.data.wsapi.TreeStoreBuilder').build({
            models: ['userstory'],
//            var workspace = c'/workspace/CDI Hardware', Project: 'project/Synergy', projectScopeUp: false, projectScopeDown: true},
            autoLoad: true,
          context : {
            workspace : 'https://rally1.rallydev.com/slm/webservice/v2.0/workspace/50876644101',
            project : 'https://rally1.rallydev.com/slm/webservice/v2.0/project/50891172431'
       //     project : 'https://rally1.rallydev.com/slm/webservice/v2.0/project/51186097359'
       //     projectScopeUp: false, 
       //     projectScopeDown: true
    
           },
            enableHierarchy: true,
            filters: [{property: 'Iteration.Name',
                     operator : '=',
                     value : 'March'},
        //            {property: 'Project.Parent.Name',
        //             operator : '=',
        //            value : 'Synergy'},
                    {property: 'Project.Name',
                    operator : '=',
                    value : 'Condor'}
                ]
           }).then({
            success: function(store) {
                 Ext.create('Ext.Container', {
                        width : 1000,
                        height : 1000,
                        border : 5,
                   //     context : {Project : 'Synergy', projectScopeDown: true, projectScopeUp: false},
                       items: [
                        {
                         xtype: 'rallytreegrid',
                         columnCfgs: [
                             'DisplayColor',
                             'Name',
                             'ScheduleState',
                             'Blocked',
                             'TaskEstimateTotal',
                             'TaskRemainingTotal',
                             'Owner',
                             'Notes'
                         ],
                         store: store
                     }],
                     renderTo: Ext.getBody()
             });
         }
 
      }); 
 //   }  
 // });