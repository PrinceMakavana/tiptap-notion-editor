import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { useRef } from "react"

const Editor = () => {
    const editor = useEditor({
        extensions : [StarterKit],
        content : `<p>Hello I am Tiptap</p>`
    })
    
    const editorRef = useRef<HTMLDivElement>(null)
    return (
        <div ref={editorRef}>
            <EditorContent editor={editor} />
        </div>
    )
}

export default Editor