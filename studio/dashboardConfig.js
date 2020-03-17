export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e709a16f4a75aebcd1ad1db',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-wvavzbo5',
                  apiId: 'f55310f5-3a72-4fd5-8687-bd9881fa57f3'
                },
                {
                  buildHookId: '5e709a16acf72618cce07102',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-jmsvic18',
                  apiId: '4b46f399-6b99-49ae-902c-8c57e79da2ed'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joshfarrant/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-jmsvic18.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
