const files = [
  {
    path: ({ name }) => `${name}.tsx`,
    template: ({ name, helpers }) => {
      const namePascalCase = helpers.changeCase.pascalCase(name)
      const propsName = `${namePascalCase}Props`
      return `import React from 'react'       
    import Box from '@useweb/ui/Box'
  
    export type ${propsName} = { name: string }
  
    export default function ${namePascalCase}({ name }: ${propsName}) {
      return (
        <Wrapper>
         ${name}
        </Wrapper>
      );
    }

    const Wrapper = ({ children }) => {
      return <Box>{children}</Box>
    }
      `
    },
  },
]

const template = {
  type: 'Component',
  files,
}

module.exports = {
  files,
  template,
}
