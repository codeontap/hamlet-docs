module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'hello/welcome',
    },
    'hello/hamlet',
    {
      type: 'category',
      label: 'Foundations',
      items: [
        'foundations/anatomy',
        'foundations/index',
        'foundations/inputsources',
        'foundations/outputtypes',
        'foundations/links',
        'foundations/terminology',
      ]
    },
    {
      type: 'category',
      label: 'Integrations',
      items: [
        'integrations/index',
        {
          type: 'category',
          label: 'Jenkins',
          items: [
            {
              type: 'category',
              label: 'Pipelines',
              items: [
                'integrations/jenkins/pipelines/index',
                'integrations/jenkins/pipelines/buildpipeline',
                'integrations/jenkins/pipelines/solutionpipelines',
                'integrations/jenkins/pipelines/dotproperties',
                'integrations/jenkins/pipelines/jobs',
              ]
            },
            {
              type: 'category',
              label: 'Script Library',
              items: [
                'integrations/jenkins/scriptlibrary/index',
                {
                  type: 'category',
                  label: 'Common',
                  items: [
                    'integrations/jenkins/scriptlibrary/scripts/common/cmdbsetup',
                    'integrations/jenkins/scriptlibrary/scripts/common/gets3bucketname',
                    'integrations/jenkins/scriptlibrary/scripts/common/manageenvironment',
                    'integrations/jenkins/scriptlibrary/scripts/common/productsetup',
                    'integrations/jenkins/scriptlibrary/scripts/common/setcontext',
                    'integrations/jenkins/scriptlibrary/scripts/common/setreleasename',
                    'integrations/jenkins/scriptlibrary/scripts/common/updatebuilddescription',
                  ]
                },
                {
                  type: 'category',
                  label: 'Solution Dependent',
                  items: [
                    'integrations/jenkins/scriptlibrary/scripts/specific/builddataset',
                    'integrations/jenkins/scriptlibrary/scripts/specific/getdatabasedetails',
                    'integrations/jenkins/scriptlibrary/scripts/specific/getdeploymentunitbuildblueprint',
                    'integrations/jenkins/scriptlibrary/scripts/specific/wakeecscluster',
                  ]
                },
                {
                  type: 'category',
                  label: 'Notifications',
                  items: [
                    'integrations/jenkins/scriptlibrary/scripts/notifications/sendslackinputprompt',
                    'integrations/jenkins/scriptlibrary/scripts/notifications/sendslackmessage',
                  ]
                },
              ]
            },
            {
              type: 'category',
              label: 'Example Library',
              items: [
                'integrations/jenkins/examplelibrary/index',
                {
                  type: 'category',
                  label: 'Build',
                  items: [
                    'integrations/jenkins/examplelibrary/examples/build/single',
                    'integrations/jenkins/examplelibrary/examples/build/multiunit',
                  ]
                },
                {
                  type: 'category',
                  label: 'Deploy',
                  items: [
                    'integrations/jenkins/examplelibrary/examples/deploy/approve-release',
                    'integrations/jenkins/examplelibrary/examples/deploy/automatic-deploy',
                    'integrations/jenkins/examplelibrary/examples/deploy/deploy-release',
                    'integrations/jenkins/examplelibrary/examples/deploy/prepare-release',
                    'integrations/jenkins/examplelibrary/examples/deploy/promote-release',
                  ]
                },
                {
                  type: 'category',
                  label: 'Manage',
                  items: [
                    'integrations/jenkins/examplelibrary/examples/manage/environment',
                  ]
                },
                {
                  type: 'category',
                  label: 'Utilities',
                  items: [
                    'integrations/jenkins/examplelibrary/examples/utils/publish-expo-app',
                    'integrations/jenkins/examplelibrary/examples/utils/pull-image',
                    'integrations/jenkins/examplelibrary/examples/utils/run-task',
                  ]
                }
              ]
            }
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Contribute',
      items: [
        {
          type: 'category',
          label: 'Setup',
          items: [
            'contribute/setup/workspace',
            'contribute/setup/devcontainer',
            'contribute/setup/source',
            'contribute/setup/pulls',
            'contribute/setup/repository-index',
          ]
        },
        {
          type: 'category',
          label: 'Structure',
          items: [
            {
              type: 'category',
              label: 'Engine',
              items: [
                'contribute/structure/engine/deploymentlevels',
                'contribute/structure/engine/fragments',
                'contribute/structure/engine/legacy',
                'contribute/structure/engine/occurrence',
                'contribute/structure/engine/logging',
                'contribute/structure/engine/openapi',
              ]
            },
            {
              type: 'category',
              label: 'Executor',
              items: [
                'contribute/structure/executor/executor',
                'contribute/structure/executor/templates',
                'contribute/structure/executor/credentials',
                'contribute/structure/executor/crypto',
                'contribute/structure/executor/deployment',
                'contribute/structure/executor/automation',
              ]
            },
            {
              type: 'category',
              label: 'Providers',
              items: [
                'contribute/structure/providers/overview',
                'contribute/structure/providers/shared',
                'contribute/structure/providers/aws',
                'contribute/structure/providers/azure',
                'contribute/structure/providers/services',
              ]
            },
            {
              type: 'category',
              label: 'Deployment Frameworks',
              items: [
                'contribute/structure/df/overview',
                'contribute/structure/df/default',
                'contribute/structure/df/models',
                {
                  type: 'category',
                  label: 'Outputs',
                  items: [
                    'contribute/structure/df/outputs/overview',
                    'contribute/structure/df/outputs/default',
                    'contribute/structure/df/outputs/contracts',
                    'contribute/structure/df/outputs/scripts',
                  ]
                },
              ]
            },
            {
              type: 'category',
              label: 'Data Types',
              items: [
                'contribute/structure/data_types/overview',
                'contribute/structure/data_types/blueprint',
                'contribute/structure/data_types/command-line-options',
                'contribute/structure/data_types/definition',
                'contribute/structure/data_types/masterdata',
                'contribute/structure/data_types/reference',
                'contribute/structure/data_types/seed',
                'contribute/structure/data_types/setting',
                'contribute/structure/data_types/stack-output',
              ]
            },
          ]
        },
        {
          type: 'category',
          label: 'Tools',
          items: [
            'contribute/tools/cli',
            {
              type: 'category',
              label: 'Docker',
              items: [
                'contribute/tools/docker/images',
                'contribute/tools/docker/scripts',
              ]
            },
            {
              type: 'category',
              label: 'Site',
              items: [
                'contribute/tools/site/docusaurus',
                'contribute/tools/site/documentation',
                'contribute/tools/site/blogs-and-releases',
                'contribute/tools/site/react-components',
              ]
            },
            {
              type: 'category',
              label: 'Patterns',
              items: [
                'contribute/tools/patterns/patterns'
              ]
            },
            {
              type: 'category',
              label: 'Jenkins',
              items: [
                'contribute/tools/jenkins/jenkins',
              ]
            },
          ]
        },
        {
          type: 'category',
          label: 'Contributor Reference',
          items: [
            'contribute/contributor_reference/definitions',
            'contribute/contributor_reference/macros-and-functions',
            'contribute/contributor_reference/routines',
          ]
        },
      ]
    }
  ]
}