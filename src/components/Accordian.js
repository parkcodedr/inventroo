export const Accordian = ({id,children})=>{
    return (
        <div id={id} role="tablist" aria-multiselectable="true">
        {
            children
        }
    </div>
    )
}