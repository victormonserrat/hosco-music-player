import * as React from 'react';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import { Button, Card, Icon, Image } from 'semantic-ui-react';

export const Player = ({
    artist,
    cover,
    handleOnMoveToNext,
    handleOnMoveToPrevious,
    handleOnPause,
    handleOnPlay,
    playing = false,
    socialUrl,
    title,
}: Props): JSX.Element =>
    <Card centered>
        <Image src={cover} />
        <Card.Content>
            <Card.Header>{title}</Card.Header>
            <Card.Meta>{artist}</Card.Meta>
        </Card.Content>
        <FacebookShareButton
            quote={`Listening "${title} - ${artist}" at ${socialUrl}`}
            url={socialUrl}
        >
            <Button
                attached
                color={'facebook'}
            >
                <Icon name={'facebook'} />
                Facebook
            </Button>
        </FacebookShareButton>
        <TwitterShareButton
            title={`Listening "${title} - ${artist}" at`}
            url={socialUrl}
        >
            <Button
                attached
                color={'twitter'}
            >
                <Icon name={'twitter'}  />
                Twitter
            </Button>
        </TwitterShareButton>
        <Button.Group attached={'bottom'} basic>
            <Button
                icon={'step backward'}
                onClick={() => handleOnMoveToPrevious()}
            />
            { playing ?
                <Button
                    icon={'pause'}
                    onClick={() => handleOnPause()}
                />
                :
                <Button
                    icon={'play'}
                    onClick={() => {handleOnPlay()}}
                />
            }
            <Button
                icon={'step forward'}
                onClick={() => handleOnMoveToNext()}
            />
        </Button.Group>
    </Card>
;

export interface Props {
    artist: string,
    cover: string,
    handleOnMoveToNext: any,
    handleOnMoveToPrevious: any,
    handleOnPause: any,
    handleOnPlay: any,
    playing?: boolean,
    socialUrl: string,
    title: string,
}