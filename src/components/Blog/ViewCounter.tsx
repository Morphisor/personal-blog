"use client"
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'

const supabase = createClientComponentClient()

interface Props {
    slug: string
    noCount?: boolean
    showCount: boolean
}

export function ViewCounter({ slug, noCount, showCount }: Props) {

    const [views, setViews] = useState(0)

    useEffect(() => {
        const incrementView = async () => {
            try {
                const { data, error} = await supabase.rpc('increment', { slug_text: slug })
                if (error) console.log(error)
            } catch (e) {
                console.error(e)
            }
        }

        if (!noCount) {
            incrementView()
        }
    }, [slug, noCount])

    useEffect(() => {
        const getViews = async () => {
            try {
                const { data: views, error} = await supabase
                    .from('views')
                    .select('count')
                    .match({ slug: slug})
                    .single()
                if (error) {
                    console.log(error)
                } else {
                    setViews(views.count)
                }
            } catch (e) {
                console.error(e)
            }
        }

        if (showCount) {
            getViews()
        }
    }, [slug, showCount])

    return (
        <>
        {showCount && <div>{views}</div>}
        </>
    )
}