import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ImagePreview from './'
import Dropzone from 'components/molecules/Dropzone'

export default {
  title: 'Molecules/ImagePreview',
  argTypes: {
    src: {
      control: { type: 'text' },
      description: '이미지 URL',
      table: {
        type: { summary: 'string' },
      },
    },
    alt: {
      control: { type: 'text' },
      description: '대체 텍스트',
      table: {
        type: { summary: 'string' },
      },
    },
    height: {
      control: { type: 'number' },
      description: '세로폭',
      table: {
        type: { summary: 'number' },
      },
    },
    width: {
      control: { type: 'number' },
      description: '가로폭',
      table: {
        type: { summary: 'number' },
      },
    },
    onRemove: {
      description: '삭제 버튼을 클릭했을 때의 이벤트 핸들러',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as ComponentMeta<typeof ImagePreview>

const Container = styled.div`
  width: 288px;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr;
`

interface Image {
  file?: File
  src?: string
}

const Template: ComponentStory<typeof ImagePreview> = (args) => {
  const [files, setFiles] = useState<File[]>([])
  const [images, setImages] = useState<Image[]>([])

  useEffect(() => {
    const newImages = [...images]

    for (const f of files) {
      const index = newImages.findIndex((img: Image) => img.file === f)

      if (index === -1) {
        newImages.push({
          file: f,
          src: URL.createObjectURL(f),
        })
      }
    }
    setImages(newImages)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files])

  const handleRemove = (src: string) => {
    const image = images.find((img: Image) => img.src === src)

    if (image !== undefined) {
      setImages((images) => images.filter((img) => img.src !== image.src))
      setFiles((files) => files.filter((file: File) => file !== image.file))
    }

    args && args.onRemove && args.onRemove(src)
  }

  return (
    <Container>
      <Dropzone value={files} onDrop={(fileList) => setFiles(fileList)} />
      {images.map((image, i) => (
        <ImagePreview
          key={i}
          src={image.src}
          width="100px"
          {...args}
          onRemove={handleRemove}
        />
      ))}
    </Container>
  )
}

export const WithDropzone = Template.bind({})
WithDropzone.args = {}
